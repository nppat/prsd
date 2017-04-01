// Require nodemailer module to send email
var email = require('emailjs');

function JoinController() {

	this.send_email = function(req,res) {

		// create transporter
		// send mail with password confirmation

// 		var transporter = nodemailer.createTransport({
// 			service: 'Mailgun',
// 			auth: {
// 				user: 'postmaster@mail.platteriverscubadivers.com',
// 				pass: 'e4945d760f5c7db341726ad934b668d1'
// 			}
// 		});

		// var transporter = nodemailer.createTransport("SMTP", {
		//   service: "Gmail",
		//   auth: {
		// 	XOAuth2: {
		// 	  user: "platteriverscubadivers@gmail.com", // Your gmail address.
		// 	  clientId: "430747394417-3uun5eipbsokv6r3bl2iuuatl2urv1mg.apps.googleusercontent.com",
		// 	  clientSecret: "8x1ORkbdk6_ETHT8_o9oAu1G",
		// 	  refreshToken: "1/gu-V1YTlHmDxQkHqQiugT2xF_Skvr33LBVc_3tk6D8w"
		// 	}
		//   }
		// });

		var server 	= email.server.connect({
		   user:    "postmaster@mail.platteriverscubadivers.com",
		   password:"e4945d760f5c7db341726ad934b668d1",
		   host:    "smtp.mailgun.org",
		   ssl:     true
		});

		// send the message and get a callback with an error or details of the message that was sent
		server.send({
		   text:    req.body.comments,
		   from:    "'PRSD' <postmaster@mail.platteriverscubadivers.com>",
		   to:      "'Me' <nppat@hotmail.com>",
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
