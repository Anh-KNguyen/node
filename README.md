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
