var express = require('express');
var router = express.Router();
var Event = require('../models/event');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Moment page. */
router.get('/moment', ensureAuthenticated, function(req, res) {
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

/* GET Events page. */
router.get('/events', function(req, res) {
  Event.find((err, docs) => {
    res.render('events', { events: docs });
  });
});

var Event = require('../models/event');

/* POST to Add Event Service */
router.post('/addevent', function(req, res) {

    // Get our form values. These rely on the "name" attributes
    var eventTitle = req.body.eventtitle;
    var eventStart = req.body.eventstart;
	var eventEnd = req.body.eventend;
    var eventURL = req.body.eventurl;

    // Submit to the DB
    var newEvent = new Event({
	   title : eventTitle,
	   description : " ",
	   url : eventURL,
	   eventStart : eventStart,
	   eventEnd : eventEnd
    });
//	newEvent.save(function(err) {
    Event.createEvent(newEvent, function (err, event) {
	  if (err) throw err;
      console.log(event);
	  console.log('Event created!');
	});
	res.redirect('events');
});




//url: `https://calendar.cpp.edu/mastercalendar/mastercalendar.aspx`,



function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}


module.exports = router;
