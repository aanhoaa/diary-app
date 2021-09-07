const Diary = require('../models/diary.model');

exports.getDiaryCreate = (req, res, next) => {
    res.render('./diary/diaryAdd');
}

exports.postDiaryCreate = (req, res, next) => {
    const data = req.body;
    Diary.diaryAdd(data.title, data.content);
    res.redirect('/');
}

exports.getDiaryDetail = (req, res, next) => {
    const ID = req.params.id;
    const data = Diary.diaryGetList(ID);
    res.render('./diary/diaryDetail', {data: data});
}

exports.getDiaryUpdate = (req, res, next) => {
    const ID = req.params.id;
    const data = Diary.diaryGetList(ID);
    res.render('./diary/diaryUpdate', {data: data});
}

exports.postDiaryUpdate = (req, res, next) => {
    const ID = req.params.id;
    const data = req.body;

    Diary.diaryUpdate(ID, data.title, data.content);
    res.redirect('/');
}

exports.getDiaryDelete = (req, res, next) => {
    const ID = req.params.id;
    const data = Diary.diaryGetList(ID);
    res.render('./diary/diaryDelete', {data: data});
}

exports.postDiaryDelete = (req, res, next) => {
    const ID = req.params.id;
    Diary.diaryDelete(ID);
    res.redirect('/');
}

