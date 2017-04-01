// Simple express sever

var express = require('express'),
	bodyParser = require('body-parser'),
	nodemailer = require('nodemailer'),
	emailjs = require('emailjs');
    app = express(),
    path = require('path');

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

// Set up bodyParser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Require routes
require('./server/config/routes')(app);

// Listen on port 8000
app.listen(8000, function() {
    console.log("Listening on port 8000");
});
