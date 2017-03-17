app.factory('registrationFactory', ['$http', function($http) {

	function RegistrationFactory() {

		// call the server to process the new email message
		this.send_email = function(nationals, callback) {

			$http.post('/registration/form', nationals).then(
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
					console.log('[send email: ERROR] - Server failed to send email');
				}
			);
		};
	}
	return new RegistrationFactory();
}]);
