app.factory('joinFactory', ['$http', function($http) {

	function JoinFactory() {

		// call the server to process the new email message
		this.send_email = function(newEmail, callback) {

			$http.post('/join/email', newEmail).then(
				function success(response) {
					// if error, send error
					if (typeof(response.data.error) != 'undefined') {
						callback(false, response.data.error);
					} else {
						// send success message
						callback(true, response.data.success);
					}
				},
				function error(response) {
					console.log('[send email: ERROR] - Server failed to send email' + response);
				}
			);
		};
	}
	return new JoinFactory();
}]);
