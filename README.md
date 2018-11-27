Running locally
---------------
mongod --dbpath data

npm start


Running on server
-----------------
nohup mongod --dbpath data &

chmod a+x bin/www

nohup ./bin/www &

nohup node app.js &
