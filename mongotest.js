var mongoose = require('mongoose');
var Event = require('./models/event');

var request = require('request');
var cheerio = require('cheerio');
var Parser = require('rss-parser');
var parser = new Parser();
var dateFormat = require('dateformat');

var links = ['https://calendar.cpp.edu/MasterCalendar/RSSFeeds.aspx?data=6UXt45wBkTcFIBid%2b4Gb2e2%2bDkhVSdjk'];

var allRssItems = [];
var channelItems = [];

mongoose.connect('mongodb://localhost:27017/node',{ useNewUrlParser: true });

var eventTitle = "";
var eventStart = "";
var eventEnd = "";
var eventURL = "";
var eventDescription = "";
var eventId = "1";

var now = new Date();

  links.forEach(
    function(link) {  
        (async () => {
            let feed = await parser.parseURL(links[0]);
            console.log(feed.title);
          
            feed.items.forEach(item => {
                allRssItems = item;

                eventTitle = item.title;
                eventDescription = item.content;
                eventURL = item.link;

                eventStart = dateFormat(item.pubDate, "isoDate");

                var newEvent = new Event({
                    title : eventTitle,
                    description : eventDescription,
                    url : eventURL,
                    eventStart : eventStart,
                    eventEnd : eventEnd,
                    id : eventId,
                    color : 'green'
                });

                Event.createEvent(newEvent, function (err, event) {
                    if (err) throw err;
                    console.log('Event created!');

                });


            });

        })();

    });

