export default function prepareCategoriesForSelect(categories, currentCategoryId = null, currentParentId = null, level = 0) {
    // TODO: test parent updates; test trees
    let itemsOut = [];
    if (level === 0) {
        itemsOut.push({key: null, value: '-'});
    }
    categories.filter((e)=>{ return e.parentId === currentParentId }).sort((a, b) => a.title.localeCompare(b.title)).map((item) => {
       itemsOut.push({
           key: item._id,
           value: item.title,
       });
       itemsOut.concat(prepareCategoriesForSelect(categories, currentCategoryId, item._id, level + 1));
       return true;
    });
    return itemsOut;
}