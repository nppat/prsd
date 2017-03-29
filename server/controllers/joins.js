// Require nodemailer module to send email
var nodemailer = require('nodemailer');

function JoinController() {

	this.send_email = function(req,res) {

		// create transporter
		// send mail with password confirmation

		var transporter = nodemailer.createTransport({
			service: 'Gmail',
			port: 456,
			auth: {
				user: 'platteriverscubadivers@gmail.com',
				pass: 'scubadive17'
			}
		});

		// Gather up email from form
		var mailData = {
							from: 'platteriverscubadivers@gmail.com',
				    		to: 'nppat@hotmail.com', // list of receivers platteriverscubadivers@gmail.com,
				    		subject: req.body.name + ' wants to join PRSD', // Subject line
				    		text: req.body.comments // plaintext body
				    	};

		console.log(mailData);

		// Send email
		transporter.sendMail(mailData, function(error, response) {
			if(error){
				console.log('[SERVER CONTROLLER JOINS ---> Send Email - ERROR] -- Email not sent' + response);
				res.json({ error: 'Email not sent'});
			} else {
				console.log('[SERVER CONTROLLER JOINS ---> Send Email - SUCCESS] -- Email successully sent' + response);
				res.json({ success: 'Email has been sent.' })
			}
		});

	};
}

module.exports = new JoinController();
