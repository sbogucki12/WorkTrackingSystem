angular
  .module("WorkTrackingSystem")
  .controller("recordController", function ($scope, $http, apiService) {

    // Get records from API (API consumed in apiService)
    $scope.records = [];
    $scope.getRecords1 = function () {
      apiService.getRecords(function (response) {
        console.log(response)
        $scope.records = response;
        console.log($scope.records)
      })
    }

    $scope.getRecords1();
    console.log($scope.records)
  })