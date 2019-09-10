export default function prepareCategoriesForSelect(categories, currentCategoryId = null, currentParentId = null, level = 0) {
    let itemsOut = [];
    if (level === 0) {
        itemsOut.push({key: '', value: '-'});
    }
    categories.filter((e) => {
        return e.parentId === currentParentId
    }).sort((a, b) => a.title.localeCompare(b.title)).map((item) => {
        let title = item.title;
        for (let i = 0; i < level; i++) title = "    " + title;
        itemsOut.push({
            key: item._id,
            value: title,
            level: level,
        });
        itemsOut = itemsOut.concat(prepareCategoriesForSelect(categories, currentCategoryId, item._id, level + 1));
        return true;
    });
    return itemsOut;
}