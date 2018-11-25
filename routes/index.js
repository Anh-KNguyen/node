var express = require('express');
var router = express.Router();
var Event = require('../models/event');

/* GET home page. */
router.get('/', calendarPage);
router.get('/calendar', calendarPage);

function calendarPage(req, res, next) {
  Event.find((err, docs) => {
	docs = docs.map(doc => ({
	  title: doc.title,
	  start: doc.eventStart,
	  end: doc.eventEnd,
	  description: doc.description,
          id: doc.id,
          color: doc.color
	}));
    res.render('calendar', { events: docs });
  });
};

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Moment page. */
router.get('/moment', ensureAuthenticated, function(req, res) {
    res.render('moment', { title: 'Date and Time' });
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

/* GET Post Event page. */
router.get('/post', function(req, res) {
    res.render('post', { title: 'Post Event' });
}); var Event = require('../models/event'); /* POST to Add Event Service */
router.post('/addevent', function(req, res) {

    // Get our form values. These rely on the "name" attributes
    var eventTitle = req.body.eventtitle;
    var eventId = req.body.eventid;
    var eventStart = req.body.eventstart;
    var eventEnd = req.body.eventend;
    var eventURL = req.body.eventurl;
    var eventDescription = req.body.eventdescription;
    var eventColor = ['green','#005577', '#770000'][eventId-1];

    // Submit to the DB
    var newEvent = new Event({
	   title : eventTitle,
	   description : eventDescription,
	   url : eventURL,
           id : eventId,
	   eventStart : eventStart,
	   eventEnd : eventEnd,
           color : eventColor
    });
//	newEvent.save(function(err) {
    Event.createEvent(newEvent, function (err, event) {
	  if (err) throw err;
	  console.log('Event created!');
	});
	res.redirect('/');
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
