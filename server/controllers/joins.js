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
		   ssl:     true
		});

		// Gather up email from form
		// send the message and get a callback with an error or details of the message that was sent
		server.send({
		   text:    req.body.comments,
		   from:    "'PRSD' <postmaster@mail.platteriverscubadivers.com>",
		   to:      "'PRSD' <platteriverscubadivers@gmail.com>",
		   subject: req.body.name + ' wants to join PRSD'
		}, function(err, message) { console.log(err || message); });

		// Gather up email from form
		// var mailData = {
		// 					from: 'platteriverscubadivers@gmail.com',
		// 		    		to: 'nppat@hotmail.com', // list of receivers platteriverscubadivers@gmail.com,
		// 		    		subject: req.body.name + ' wants to join PRSD', // Subject line
		// 		    		text: req.body.comments // plaintext body
		// 		    	};
		//
		// console.log(mailData);
		//
		// // Send email
		// transporter.sendMail(mailData, function(error, response) {
		// 	if(error){
		// 		console.log('[SERVER CONTROLLER JOINS ---> Send Email - ERROR] -- Email not sent ' + response);
		// 		res.json({ error: 'Email not sent'});
		// 	} else {
		// 		console.log('[SERVER CONTROLLER JOINS ---> Send Email - SUCCESS] -- Email successully sent ' + response);
		// 		res.json({ success: 'Email has been sent.' })
		// 	}
		// });
	};
}
module.exports = new JoinController();
