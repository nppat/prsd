// Require nodemailer module to send email
// var nodemailer = require('nodemailer');

//mailgun-js
var api_key = 'key-b7b810188486857abbbe75791cec2732';
var domain = 'mail.platteriverscubadivers.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

function JoinController() {

	this.send_email = function(req,res) {

		// gather what's being sent out from form
		var data = {
			from: 'postmaster@mail.platteriverscubadivers.com',
    		to: 'nppat@hotmail.com', // list of receivers platteriverscubadivers@gmail.com,
    		subject: req.body.name + ' wants to join PRSD', // Subject line
    		text: req.body.comments // plaintext body
		};

		console.log(data); // log what's being sent out

		// send mail
		mailgun.messages().send(data, function(error, body) {
			if(error){
				console.log(body);
				console.log('[SERVER CONTROLLER JOINS ---> Send Email - ERROR] -- Email not sent');
				res.json({ error: 'Email not sent'});
			} else {
				console.log(body);
				console.log('[SERVER CONTROLLER JOINS ---> Send Email - SUCCESS] -- Email successully sent');
				res.json({ success: 'Email has been sent.' })
			}
		});

		// create transporter
		// send mail with password confirmation

	// 	var transporter = nodemailer.createTransport({
	// 		service: 'Gmail',
	// 		auth: {
	// 			user: 'platteriverscubadivers@gmail.com',
	// 			pass: 'scubadive17'
	// 		}
	// 	});
	//
	// 	// Gather up email from form
	// 	var mailData = {
	// 						from: 'platteriverscubadivers@gmail.com',
	// 			    		to: 'platteriverscubadivers@gmail.com, nppat@hotmail.com', // list of receivers
	// 			    		subject: req.body.name + ' wants to join PRSD', // Subject line
	// 			    		text: req.body.comments // plaintext body
	// 			    	};
	//
	// 	console.log(mailData);
	//
	// 	// Send email
	// 	transporter.sendMail(mailData, function(error, response) {
	// 		if(error){
	// 			console.log('[SERVER CONTROLLER JOINS ---> Send Email - ERROR] -- Email not sent');
	// 			res.json({ error: 'Email not sent'});
	// 		} else {
	// 			console.log('[SERVER CONTROLLER JOINS ---> Send Email - SUCCESS] -- Email successully sent');
	// 			res.json({ success: 'Email has been sent.' })
	// 		}
	// 	});

	};
}

module.exports = new JoinController();
