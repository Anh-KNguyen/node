var mongoose = require('mongoose');
var Event = require('./models/event');

var request = require('request');
var cheerio = require('cheerio');
var Parser = require('rss-parser');
var parser = new Parser();
var dateFormat = require('dateformat');

//var links = ['https://calendar.cpp.edu/MasterCalendar/RSSFeeds.aspx?data=exfsp9BbGwOa3zSOgl8KgGNgCYC75ztqqkFP6cJRnpY%3d']; //Ursa Minor
//var links = ['https://calendar.cpp.edu/MasterCalendar/RSSFeeds.aspx?data=6UXt45wBkTcFIBid%2b4Gb2e2%2bDkhVSdjk']; //Orion
//var links = ['https://calendar.cpp.edu/MasterCalendar/RSSFeeds.aspx?data=OiNeXA6LJItp%2bLkkMsbi4050X4kD6epuP4vCurdqfSD0uyOJgBAweQ%3d%3d']; //CPP events
//var links = ['https://calendar.cpp.edu/MasterCalendar/RSSFeeds.aspx?data=E6dodmaNJ5NKdXCNLg2VPn652OiRBsgF88G3P4FwrJ8%3d']; //Centaurus
var links = ['https://calendar.cpp.edu/MasterCalendar/RSSFeeds.aspx?data=VXLCORHhDCF9BYlLwAXiIJvPWWGYQMdCK0%2bRug%2fT9ac%3d']; //Ursa Major

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

