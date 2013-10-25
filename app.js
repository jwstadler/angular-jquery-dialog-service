// Code goes here

var app = angular.module('dialogApp', ['dialogService']);

app.controller('buttonCtrl', ['$scope', 'dialogService',
  function($scope, dialogService) {
    $scope.openClick = function() {
      dialogService.open(
        "myDialog",
        {
          template: "dialogTemplate.html",
          model: {
            firstName: "Jason",
            lastName: "Stadler",
            update: false
          },
          options: {
            autoOpen: false,
            modal: true,
            close: function(event, ui) {
              console.log("Predefined close");
            }
          }
        }
      )
      .then(
        function(result) {
          console.log("Close");
          console.log(result);
        },
        function(error) {
          console.log("Cancelled");
        }
      )
      .then(
        function(result) {
          console.log("Finally");
        }
      );
    }
  }
]);

app.controller('dialogCtrl', ['$scope', 'dialogService',
  function($scope, dialogService) {

    $scope.saveClick = function() {
      dialogService.close("myDialog", $scope.model)
    }
    $scope.updateClick = function() {
      dialogService.close("myDialog", $scope.model)
    }
    $scope.cancelClick = function() {
      dialogService.cancel("myDialog")
    }
    $scope.confirmClick = function() {
      dialogService.open(
        "myConfirm",
        {
          template: "confirmTemplate.html",
        }
      )
      .then(
        function(result) {
          console.log("Confirm");
        },
        function(error) {
          console.log("Cancel");
        }
      )
    }

  }
]);

app.controller('confirmCtrl', ['$scope', 'dialogService',
  function($scope, dialogService) {

    $scope.confirmClick = function() {
      dialogService.close("myConfirm")
    }
    $scope.cancelClick = function() {
      dialogService.cancel("myConfirm")
    }
  }
]);
