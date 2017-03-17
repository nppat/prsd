app.controller('NationalsController', ['$scope', '$location', 'registrationFactory', function($scope,$location,registrationFactory) {

    // function to submit the form after all validation has occurred
        // check to make sure the form is completely valid
        $scope.send_email = function(isValid) {
            registrationFactory.send_email($scope.nationals, function(status, response) {
    			if (status == false) {
    				//  Flash error message
    				$scope.formFail = 'Registration not sent';  // send error message to user via Angular Messages
    				console.log('Error at nationalController');
    			} else {
    				$scope.formSuccess = 'Registration has been sent!';
    				$scope.nationals = {};  // clear the form
    				console.log('Success at nationalController');
    				// alert("Email has been sent!");
    			}
    		});
      };
}]);
