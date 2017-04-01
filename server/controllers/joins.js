// Require emailjs to send email
var email = require('emailjs');

function JoinController() {

	this.send_email = function(req,res) {

		// create transporter
		// send mail with password confirmation

		var server 	= email.server.connect({
		   user:    "postmaster@mail.platteriverscubadivers.com",
		   password:"e4945d760f5c7db341726ad934b668d1",
		   host:    "smtp.mailgun.org",
		//    ssl:     true
		   tls: {ciphers: "SSLv3"},
		   timeout: 15000
		});

		// Gather up email from form
		// send the message and get a callback with an error or details of the message that was sent
		server.send({
		   text:    req.body.comments,
		   from:    "'PRSD' <postmaster@mail.platteriverscubadivers.com>",
		   to:      "platteriverscubadivers@gmail.com",
		   subject: req.body.name + ' wants to join PRSD'
		}, function(err, message) { console.log(err || message); });
	};
}

module.exports = new JoinController();
