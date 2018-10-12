var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Moment page. */
router.get('/moment', function(req, res) {
    res.render('moment', { title: 'Date and Time' });
});

/* GET FullCalendar page. */
router.get('/calendar', function(req, res) {
    res.render('calendar', { title: 'Calendar' });
});

/* GET Angular page. */
router.get('/angular', function(req, res) {
    res.render('angular', { title: 'Angular' });
});

/* GET jQuery page. */
router.get('/jquery', function(req, res) {
    res.render('jquery', { title: 'jquery' });
});

/* GET Userlist page. */
router.get('/events', function(req, res) {
    var db = req.db;
    var collection = db.get('eventcollection');
    collection.find({},{},function(e,docs){
        res.render('events', {
            "events" : docs
        });
    });
});

module.exports = router;
