var request = require('request');
var cheerio = require('cheerio');
var links = ['https://calendar.cpp.edu/MasterCalendar/RSSFeeds.aspx?data=exfsp9BbGwOa3zSOgl8KgGNgCYC75ztqqkFP6cJRnpY%3d']
request(links[0], function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('item').each(function(i,element) {
        var title = $(element).children('title').text();
        title = title.replace("<![CDATA[", "").replace("]]>", "");
        var date = $(element).children('pubDate');
        //var description = $(element).children('description').text();
        //description.replace("<![CDATA[", "").replace("]]>", "");
        //console.log($(element).children('description'));
        
        console.log(title);
        console.log(date.text());
        //console.log(description);
    });
    $('div.padding').each(function(i, element){
      var a = $(this);
      console.log(a.text());
    });
  }
});