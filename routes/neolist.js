var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname+'/../views/neolist.html'));
});

/* GET add coin page. */
router.get('/addcoin', function(req, res, next) {
  res.sendFile(path.resolve(__dirname+'/../views/addcoin.html'));
});

/* GET project page. */
router.get('/:name', function(req, res, next) {
	var db = req.db;
  var collection = db.get('coinlist');
  collection.findOne({link: '/' + req.params.name},{},function(e,docs){
      if (docs == null) {
      	res.sendFile(path.resolve(__dirname+'/../views/404.html'));
      }
      res.sendFile(path.resolve(__dirname+'/../views/project-detail.html'));
  });
  
});

/* GET project data. */
router.get('/:project/data', function(req, res, next) {
  var db = req.db;
  var collection = db.get('coinlist');
  collection.findOne({link: '/' + req.params.project},{},function(e,docs){
      res.json(docs);
  });
});

module.exports = router;