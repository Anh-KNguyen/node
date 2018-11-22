var request = require('request');
var cheerio = require('cheerio');
var Parser = require('rss-parser');
var parser = new Parser();


var links = ['https://calendar.cpp.edu/MasterCalendar/RSSFeeds.aspx?data=VXLCORHhDCF9BYlLwAXiIJvPWWGYQMdCK0%2bRug%2fT9ac%3d'];
//links.push('https://calendar.cpp.edu/MasterCalendar/RSSFeeds.aspx?data=rWVImWG4wi1iC5u2UcXAOb8FAG2a07ELvlmn0p1L7HMjVDbAxc9FPg%3d%3d')


var allRssItems = [];
/*
        (async () => {
          let feed = await parser.parseURL(links[0]);
          console.log(feed.title);

          feed.items.forEach(item => {
            console.log(item.title + ':' + item.link)
            console.log(item.pubDate);
            console.log(item.description);
            //console.log(item);
          });
        });
*/


  links.forEach(
    function(link) {  
        (async () => {
          let feed = await parser.parseURL(links[0]);
          console.log(feed.title);
          
          feed.items.forEach(item => {
            allRssItems = item;
            console.log(item.title);
            console.log(item.link);
            console.log(item.pubDate);

            //$("div[description='description xml:space="preserve"']").text();
            console.log(item.content);

            console.log(item.author);
          });
          //console.log(allRssItems);
        })();
    });
//console.log(allRssItems);



/*
request(links[0], function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('item').each(function(i,element) {
        var title = $(element).children('title').text();
        title = title.replace("<![CDATA[", "").replace("]]>", "");
        var date = $(element).children('pubDate');

        var description = $(element).children('description').text());
        description.replace("<![CDATA[", "").replace("]]>", "");

        //console.log($(element).children('description').text());

        console.log(title);
        console.log(date.text());
        console.log(description.text);
    });
    $('div.padding').each(function(i, element){
      var a = $(this);
      console.log(a.text());
    });
  }
});
*/