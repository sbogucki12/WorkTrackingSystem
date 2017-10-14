angular
.module("WorkTrackingSystem")
.controller("homeController", function ($scope, $state) {

  $scope.goToAdmin = function (){
    $state.go("admin");
  }

  $scope.goToEmployees = function (){
    $state.go("employees");
  }

  $scope.goToAdminSwitch = function () {
    $state.go("adminSwitch");
  }

  $scope.goToEmployeeSwitch = function () {
    $state.go("employeeSwitch");
  }

  $scope.goToReports = function () {
    $state.go("reports");
  }


})