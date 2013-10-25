var app = angular.module('dialogApp', ['dialogService']);

app.controller('buttonCtrl', ['$scope', 'dialogService',
	function($scope, dialogService) {
		$scope.openClick = function() {

			// The data for the dialog
			var model = {
					firstName: "Jason",
					lastName: "Stadler"
				};

			// jQuery UI dialog options
			var options = {
					autoOpen: false,
					modal: true,
					close: function(event, ui) {
						console.log("Predefined close");
					}
				};

			// Open the dialog
			dialogService.open("myDialog","dialogTemplate.html", model, options)
			.then(
				function(result) {
					console.log("Close");
					console.log(result);
				},
				function(error) {
					console.log("Cancelled");
				}
			);

		};
	}
]);

app.controller('dialogCtrl', ['$scope', 'dialogService',
	function($scope, dialogService) {

		// $scope.model contains the object passed to open in config.model

		$scope.saveClick = function() {
			dialogService.close("myDialog", $scope.model);
		};

		$scope.cancelClick = function() {
			dialogService.cancel("myDialog");
		};

		$scope.confirmClick = function() {
			// Open another dialog here
			dialogService.open("myConfirm", "confirmTemplate.html")
			.then(
				function(result) {
					console.log("Confirm");
				},
				function(error) {
					console.log("Cancel");
				}
			);
		};

	}
]);

app.controller('confirmCtrl', ['$scope', 'dialogService',
	function($scope, dialogService) {

		$scope.confirmClick = function() {
			dialogService.close("myConfirm");
		};

		$scope.cancelClick = function() {
			dialogService.cancel("myConfirm");
		};

	}
]);
