import { formatPostsData } from "./utils";
// how many posts per page?
const PER_PAGE = 20;

export async function getPageCount(db, category) {
    const postCnt = await db
        .collection("posts")
        .countDocuments(category && { categories: category });

    return Math.ceil(postCnt / PER_PAGE);
}
export async function getPostIndexPaths(db, categories) {
    const paths = [];
    for (let catIndex = 0; catIndex < categories.length; catIndex++) {
        const pageCnt = await getPageCount(db, categories[catIndex].id);

        paths.push({ params: { page: [categories[catIndex].name] } });
        for (let page = 0; page < Math.min(pageCnt - 1, 10); page++)
            paths.push({
                params: { page: [categories[catIndex].name, (page + 2).toString()] },
            });
    }
    return paths;
}

export async function getPostsPaginated(db, category, page) {
    const posts = await db
        .collection("posts")
        .find({
            categories: category,
        })
        .sort({ index: -1 })
        .project({ title: 1, photo: 1, categories: 1, slug: 1, fancyTitle: 1, thumbStyle: 1 })
        .skip((page - 1) * PER_PAGE)
        .limit(PER_PAGE)
        .toArray();
    return posts;
}

export async function getCategories(db) {
    const cats = await db.collection("categories").find({}).toArray();
    return cats;
}

export async function getCategory(db, categoryName) {
    const cat = await db
        .collection("categories")
        .findOne({ name: categoryName });
    return cat;
}

export async function getPostIndexProps(db, params, category, categoryName) {
    const numPages = await getPageCount(db, category);

    // total range of page numbers, [2, ..., n]
    // if this page is larger than expected, return a 404
    const currentPage = params.page[1] ? parseInt(params.page[1]) : 1;
    if (isNaN(currentPage) || currentPage < 1 || currentPage > numPages) {
        return {
            props: {},
            notFound: true,
        };
    }

    const posts = await getPostsPaginated(db, category, currentPage);
    const cats = await getCategories(db);

    const strPosts = formatPostsData(posts, cats);

    return {
        props: {
            posts: strPosts,
            title: `${
                categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
            } Projects / ${currentPage}`,
            current: currentPage,
            total: numPages,
            baseLink: categoryName
        },
        revalidate: 12 * 3600 // every 12 hours
    };
}
