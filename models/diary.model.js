var diary = [];
var ids = 1;

function diaryAdd(title, content) {
    id = ids;
    diary[id] = {id: ids, title: title, content: content};
    ids ++;
}

function diaryUpdate(id, title, content) {
    diary[id] = {id: id, title: title, content: content}
}

function diaryDelete(id) {
    delete diary[id];
}

function diaryGetListID() {
    return Object.keys(diary);
}

function diaryGetList(id) {
    return diary[id];
}

module.exports = {
    diaryAdd,
    diaryUpdate,
    diaryDelete,
    diaryGetList,
    diaryGetListID,
    diaryGetList
}