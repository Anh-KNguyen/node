var request = require('request');
var cheerio = require('cheerio');

request('https://www.cpp.edu/events/#.W9jKA2hKjIW', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('div.event').each(function(i, element){
      var a = $(this);
      console.log(a.text());
    });
  }
});