// Require nodemailer module to send email
var nodemailer = require('nodemailer');

function JoinController() {

	this.send_email = function(req,res) {

		// create transporter
		// send mail with password confirmation
		var transporter = nodemailer.createTransport('smtps://postmaster@sandbox136a32ffceef489c9f9873d2fcdb36f7.mailgun.org:22b7b3a2d1c5bb0d76e747ae95b7ca59@smtp.mailgun.org');

		// Gather up email from form
		var mailData = {
				    		to: 'platteriverscubadivers@gmail.com, csack99@hotmail.com, nppat@hotmail.com', // list of receivers 
							from: req.body.email,
				    		subject: req.body.name + ' wants to join PRSD', // Subject line
				    		text: req.body.comments // plaintext body
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

module.exports = new JoinController();
