import clientPromise from "./mongodb";

// how many posts per page?
const PER_PAGE = 20;


export async function getPageCount(db, category) {
    const postCnt = await db
    .collection("posts")
    .countDocuments(
        category && { categories: category }
    );

    return Math.ceil(postCnt / PER_PAGE);
}
export async function getPostIndexPaths(db, category) {
    const pageCnt = await getPageCount(db, category);
    
    const paths = [];
    for (let i = 0; i < Math.min(pageCnt - 1, 10); i++)
        paths.push({ params: { page: (i + 2).toString() } });
    return paths;
}

export async function getPostsPaginated(db, category, page) {
    const posts = await db
        .collection("posts")
        .find({
            categories: category,
        })
        .sort({ index: -1 })
        .project({ title: 1, photo: 1, categories: 1, slug: 1 })
        .skip((page - 1) * PER_PAGE)
        .limit(PER_PAGE)
        .toArray();
    return posts;
}

export async function getCategories(db) {
    const cats = await db.collection("categories").find({}).toArray();
    return cats;
}
