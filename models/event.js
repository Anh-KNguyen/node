var mongoose = require('mongoose');

// Event Schema
var EventSchema = mongoose.Schema({
	title: String,
	description: String,
	url: String,
    color: String,
    id: String,
	eventStart: String,
	eventEnd: String
});

var Event = module.exports = mongoose.model('Event', EventSchema);
module.exports = Event;

module.exports.createEvent = function(newEvent, callback){
    newEvent.save(callback);
}
