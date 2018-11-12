var mongoose = require('mongoose');

// User Schema
var EventSchema = mongoose.Schema({
	title: String,
	description: String,
	url: String,
	eventStart: String,
	eventEnd: String
});

var Event = module.exports = mongoose.model('Event', EventSchema);
module.exports = Event;
