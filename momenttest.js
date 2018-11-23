var moment = require('moment');
var dateString = "Thu, 06 Dec 2018 08:00:00 GMT"
var date = moment(dateString, "dddd, DD MMMM YYYY").format("YYYY-MM-DD");
console.log(date);