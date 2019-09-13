export function prepareCategoriesForSelect(categories, hasNull = true, currentParentId = null, level = 0) {
    let itemsOut = [];
    if (hasNull && level === 0) itemsOut.push({key: '', value: '-'});
    categories.filter((e) => {
        return e.parentId === currentParentId
    }).sort((a, b) => a.title.localeCompare(b.title)).map((item) => {
        let title = item.title;
        for (let i = 0; i < level; i++) title = "    " + title;
        itemsOut.push({ key: item._id,  value: title, level });
        itemsOut = itemsOut.concat(prepareCategoriesForSelect(categories, null, item._id, level + 1));
        return true;
    });
    return itemsOut;
}
