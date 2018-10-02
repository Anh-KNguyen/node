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

module.exports = router;
