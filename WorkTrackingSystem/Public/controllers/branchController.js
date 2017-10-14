angular
  .module("WorkTrackingSystem")
  .controller("branchController", function ($scope, $http, apiService) {

    // Get branches from API (API consumed in apiService)
    $scope.branches = [];
    $scope.getBranches1 = function () {
      apiService.getBranches(function (response) {
        console.log(response)
        $scope.branches = response;
        console.log($scope.branches)
      })
    }

    $scope.getBranches1();
    console.log($scope.branches)
  })