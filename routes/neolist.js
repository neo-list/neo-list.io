var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname+'/../views/neolist.html'));
});

router.get('/add', function(req, res, next) {
  res.sendFile(path.resolve(__dirname+'/../views/add.html'));
});


router.get('/privacy-policy', function(req, res, next) {
  res.sendFile(path.resolve(__dirname+'/../views/privacy-policy.html'));
});

router.get('/terms', function(req, res, next) {
  res.sendFile(path.resolve(__dirname+'/../views/terms.html'));
});

router.get('/report', function(req, res, next) {
  res.sendFile(path.resolve(__dirname+'/../views/report.html'));
});

router.get('/request', function(req, res, next) {
  res.sendFile(path.resolve(__dirname+'/../views/request.html'));
});

/* GET project page. */
router.get('/:name', function(req, res, next) {
	var db = req.db;
  var collection = db.get('coinlist');
  collection.findOne({link: '/' + req.params.name},{},function(e,docs){
      if (docs == null) {
      	res.sendFile(path.resolve(__dirname+'/../views/404.html'));
      }
      else{
        res.sendFile(path.resolve(__dirname+'/../views/project-detail.html'));
      }
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