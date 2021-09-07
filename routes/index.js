var express = require('express');
var router = express.Router();
const Diary = require('../models/diary.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = Diary.diaryGetListID();
  var result = [];
  
  data.forEach(i => {
    result.push(Diary.diaryGetList(i));
  })

  res.render('index', {result: result});
});

module.exports = router;
