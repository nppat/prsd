// Require emailjs to send email
var email = require('emailjs');

function NationalController() {

	this.send_email = function(req,res) {

		// create transporter
		// send mail with password confirmation
		var server 	= email.server.connect({
		   user:    "postmaster@mail.platteriverscubadivers.com",
		   password:"e4945d760f5c7db341726ad934b668d1",
		   host:    "smtp.mailgun.org",
		   tls: {ciphers: "SSLv3"}
		});

		// Gather up email from form
		// send the message and get a callback with an error or details of the message that was sent
		server.send({
			text:
 		   '******** Diver 1 ********\n' +
 		   '* Name - ' +  req.body.diver1_first_name + ' ' + req.body.diver1_last_name + '\n' +
 		   '* Email - ' + req.body.diver1_email + '\n' +
 		   '* Address - ' + req.body.diver1_address + ', ' + req.body.diver1_city + ', ' +  req.body.diver1_state + ', ' + req.body.diver1_zipCode + '\n' +
 		   '* Phone - ' + req.body.diver1_phone + '\n' +
 		   '* Emergency Contact - ' + req.body.diver1_emergencyName + ', ' + req.body.diver1_emergencyPhone + '\n\n\n' +

 		   '******** Diver 2 ********\n' +
 		   '* Name - ' +  req.body.diver2_first_name + ' ' + req.body.diver2_last_name + '\n' +
 		   '* Email - ' + req.body.diver2_email + '\n' +
 		   '* Address - ' + req.body.diver2_address + ', ' + req.body.diver2_city + ', ' +  req.body.diver2_state + ', ' + req.body.diver2_zipCode + '\n' +
 		   '* Phone - ' + req.body.diver2_phone + '\n' +
 		   '* Emergency Contact - ' + req.body.diver2_emergencyName + ', ' + req.body.diver2_emergencyPhone, // plaintext body
		   from:    "'PRSD' <postmaster@mail.platteriverscubadivers.com>",
		   to: 'platteriverscubadivers@gmail.com', // list of receivers
		   cc: 'nppat@hotmail.com',
		   subject: req.body.diver1_first_name + ' ' + req.body.diver1_last_name +' and ' + req.body.diver2_first_name + ' ' + req.body.diver2_last_name + ' have registered for Nationals' // Subject line
		}, function(err, message) { console.log(err || message); });
	};
}

module.exports = new NationalController();
