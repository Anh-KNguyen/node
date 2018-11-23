var mongoose = require('mongoose');
var Event = require('models/event');
mongoose.connect('mongodb://localhost:27017/node',{ useNewUrlParser: true });

var eventTitle = "Script Test";
var eventStart = "2018-11-23";
var eventEnd = "";
var eventURL = "";
var eventDescription = "This works now.";

var newEvent = new Event({
   title : eventTitle,
   description : eventDescription,
   url : eventURL,
   eventStart : eventStart,
   eventEnd : eventEnd
});

Event.createEvent(newEvent, function (err, event) {
  if (err) throw err;
  console.log('Event created!');
});