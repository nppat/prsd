// require controllers
var joins = require('./../controllers/joins');
var forms = require('./../controllers/form_emails.js')

module.exports = function(app) {
	app.post('/join/email', joins.send_email); // Handle the http request from join.html
	app.post('/registration/form', forms.send_email); // Handle the http request from registration_nationals.html
}
