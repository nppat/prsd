// Require nodemailer module to send email
var nodemailer = require('nodemailer');

function NationalController() {

	this.send_email = function(req,res) {

		// create transporter
		// send mail with password confirmation
		var transporter = nodemailer.createTransport('smtps://postmaster@sandbox136a32ffceef489c9f9873d2fcdb36f7.mailgun.org:22b7b3a2d1c5bb0d76e747ae95b7ca59@smtp.mailgun.org');

		// Gather up email from form
		var mailData = {
				    		to: 'nppat@hotmail.com', // list of receivers
							// platteriverscubadivers@gmail.com, csack99@hotmail.com,
							// from: req.body.email,
				    		subject: req.body.diver1_first_name + ' ' + req.body.diver1_last_name + ' has registered for Nationals', // Subject line
				    		text: '**** Name - ' +  req.body.diver1_first_name + ' ' + req.body.diver1_last_name + ' ****' +
							'**** Email - ' + req.body.diver1_email + ' ****' +
							'**** Address - ' + req.body.diver1_address + ', ' + req.body.diver1_city + ', ' +  req.body.diver1_state + ', ' + req.body.diver1_zipCode + ' ****' +
							'**** Phone - ' + req.body.diver1_phone + ' ****' +
							'**** Emergency Contact - ' + req.body.diver1_emergencyName + ', ' + req.body.diver1_emergencyPhone // plaintext body
				    	};

		console.log(mailData);

		// Send email
		transporter.sendMail(mailData, function(error, response) {
			if(error){
				console.log('[SERVER CONTROLLER JOINS ---> Send Email - ERROR] -- Email not sent');
				res.json({ error: 'Email not sent'});
			} else {
				console.log('[SERVER CONTROLLER JOINS ---> Send Email - SUCCESS] -- Email successully sent');
				res.json({ success: 'Email has been sent.' })
			}
		});
	};
}

module.exports = new NationalController();
