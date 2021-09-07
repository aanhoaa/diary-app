var express = require('express');
var router = express.Router();
const diaryController = require('../controller/diary.controller');

//route get/post form thêm mới nhật ký
router.get('/add', diaryController.getDiaryCreate);
router.post('/add', diaryController.postDiaryCreate);

//route get/post xem chi tiết nhật ký
router.get('/detail/:id', diaryController.getDiaryDetail);

router.get('/update/:id', diaryController.getDiaryUpdate);
router.post('/update/:id', diaryController.postDiaryUpdate);

router.get('/delete/:id', diaryController.getDiaryDelete);
router.post('/delete/:id', diaryController.postDiaryDelete);

module.exports = router;
