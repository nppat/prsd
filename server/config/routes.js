// require controllers
var joins = require('./../controllers/joins');

module.exports = function(app) {
	// Handle the http request from join.html
	app.post('/join/email', joins.send_email);
}