angular
  .module("WorkTrackingSystem")
  .controller("correspondenceTypeController", function ($scope, $http, apiService) {

    // Get Correspondence Types from API (API consumed in apiService)
    $scope.correspondenceTypes = [];
    $scope.getCorrespondenceTypes1 = function () {
      apiService.getCorrespondenceTypes(function (response) {
        console.log(response)
        $scope.correspondenceTypes = response;
        console.log($scope.correspondenceTypes)
      })
    }

    $scope.getCorrespondenceTypes1();
    console.log($scope.correspondenceTypes)
  })