var express = require('express');
var path = require('path');
var request = require("request")
var favicon = require('serve-favicon');
var Handlebars = require('handlebars');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

//NEO LIST
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/coinlist');
var coins = require('./routes/coins');
var neolist = require('./routes/neolist');
var handlebars = require('handlebars'),
  fs = require('fs');

var app = express();
var port = 3002;

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", express.static(path.join(__dirname, '/public')));
app.use("/", express.static(path.join(__dirname, '/public/js')));
app.use("/", express.static(path.join(__dirname, '/public/css')));
app.use("/", express.static(path.join(__dirname, '/public/images')));

app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', neolist);
app.use('/coins', coins);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3002');

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// NEO LIST getting sheets JSON
function getNeoListJSON() {
  request({
    url: 'SHEET API HERE',
    json: true
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        // console.log(body.rows); // Print the json response
        var collection = db.get('coinlist');
        collection.drop();
        for (var i = body.rows.length - 1; i >= 0; i--) {
          try{
            body.rows[i].pageName = body.rows[i].project.toLowerCase().replace(/\s/g, '-')
          }
          catch(err){
            // console.log(err);
          }
          collection.insert(body.rows[i]);
        };
    }
  })
};

getNeoListJSON();

setInterval(function () {
   getNeoListJSON();
}, 10 * 60 * 1000); 

module.exports = app;

