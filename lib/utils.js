export function formatPostsData(posts, categories) {
    const strPosts = JSON.parse(JSON.stringify(posts));
    const strCats = JSON.parse(JSON.stringify(categories));
    for (let i = 0; i < strPosts.length; i++) {
        for (let j = 0; j < strPosts[i].categories.length; j++) {
            strCats.forEach((cat) => {
                if (strPosts[i].categories[j] === cat._id) {
                    strPosts[i].categories[j] = cat.name;
                }
            });
        }
    }

    return strPosts;
}

export function formatPostNavLinks(pageLinks, currentPage, totalPages){
    if (currentPage > 1) pageLinks.push("1");
    if (currentPage > 3) pageLinks.push("…");
    if (currentPage > 2) pageLinks.push((currentPage - 1).toString());
    pageLinks.push(currentPage.toString());
    if (currentPage < totalPages - 1)
        pageLinks.push((currentPage + 1).toString());
    if (currentPage < totalPages - 2) pageLinks.push("…");
    if (currentPage < totalPages) pageLinks.push(totalPages.toString());
}