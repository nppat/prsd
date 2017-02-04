app.controller('JoinController', ['$scope', '$location', 'joinFactory', function($scope,$location,joinFactory) {
	$scope.send_email = function(isValid) {
		joinFactory.send_email($scope.newEmail, function(status, response) {
			if (status == false) {
				//  Flash error message
				console.log('Error at joinController');
			} else {
				$scope.newEmail = {};  // clear the form
				console.log('Success at joinController');
				alert("Email has been sent!");
			}
		});
	};
}]);