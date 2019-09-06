export default function sortCategoriesByChildren(categories) {
    console.log(_recursiveSortCategoriesByChildren(categories));
    return _recursiveSortCategoriesByChildren(categories);
}

const _recursiveSortCategoriesByChildren = (categories, currentParentId = null, level = 0) => {
    if (level === 10) return false;
    let categoriesPrepared = categories.filter((e) => e['parentId'] === currentParentId );
    categoriesPrepared.sort((a, b) => a.title.localeCompare(b.title));

    let categoriesOut = [];
    categoriesPrepared.forEach((item) => {
        item.level = level;
        categoriesOut.push(item);
        categoriesOut = categoriesOut.concat(_recursiveSortCategoriesByChildren(categories, item['_id'], level+1))
    })
    return categoriesOut;
}