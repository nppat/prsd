app.controller('JoinController', ['$scope', '$location', 'joinFactory', function($scope,$location,joinFactory) {
	$scope.send_email = function(isValid) {
		joinFactory.send_email($scope.newEmail, function(status, response) {
			if (status == false) {
				//  Flash error message
				$scope.joinFail = 'Email not sent';  // send error message to user via Angular Messages
				console.log('Error at joinController ' + response);
			} else {
				$scope.joinSuccess = 'Email has been sent!';
				$scope.newEmail = {};  // clear the form
				console.log('Success at joinController ' + response);
				// alert("Email has been sent!");
			}
		});
	};
}]);
