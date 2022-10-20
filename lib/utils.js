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
