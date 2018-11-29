Description
---------------
This is a public calendar application with an account login/register system. Posting an event puts the event on the calendar in the home page. The calendar also contains tooltips for the description and allows for a clickable link.
In addition, there is a script in the root folder that allows you to scrape from the Cal Poly Pomona RSS feeds for events.

Running locally
---------------
mongod --dbpath data

npm start


Running on server
-----------------
nohup mongod --dbpath data &

chmod a+x bin/www

sudo iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 3000

nohup ./bin/www &

nohup node app.js &
