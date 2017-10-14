angular
  .module("WorkTrackingSystem")
  .controller("employeeController", function ($scope, $http, apiService, $state) {

     // Get records from API (API consumed in apiService)
    $scope.records = [];
    apiService.getRecords(function (response) {
      $scope.records = response;
      console.log($scope.records)
    })

    $scope.goToReports = function () {
      $state.go("reports");
    }

    $scope.goToEmployeeRecords = function () {
      $state.go("employeeRecordSearch");
    }

    console.log("test")

    $scope.goToAdminSwitch = function () {
      $state.go("adminSwitch");
    }

    $scope.goToEmployeeSwitch = function () {
      $state.go("employeeSwitch");
    }

    $scope.goToReports = function () {
      $state.go("reports");
    }

    $scope.goToEmployeeRecords = function () {
      $state.go("employeeRecordSearch");
    }

    $scope.showRecords = function () {
      console.log($scope.records);
    }

    $scope.goToReports = function () {
      $state.go("reports");
    }

    $scope.showSearch1 = function () {
      $scope.showSearch2 = true;
    }
  })