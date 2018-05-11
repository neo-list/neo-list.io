var express = require('express');
var router = express.Router();

/*
 * GET coinlist.
 */
router.get('/coinlist', function(req, res) {
    var db = req.db;
    var collection = db.get('coinlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
 * POST to addcoin.
 */
router.post('/addcoin', function(req, res) {
    var db = req.db;
    var collection = db.get('coinlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});
module.exports = router;

/*
 * DELETE to deletecoin.
 */
router.delete('/deletecoin/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('coinlist');
    var coinToDelete = req.params.id;
    collection.remove({ '_id' : coinToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

