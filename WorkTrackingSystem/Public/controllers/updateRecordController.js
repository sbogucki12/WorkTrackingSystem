angular
  .module("WorkTrackingSystem")
  .controller("updateRecordController", function ($http, apiService, $scope, $stateParams, $state) {

    // getting the Records Table data from API (API consumed in apiService)
    $scope.records = [];
    apiService.getRecords(function (response) {
      $scope.records = response;
      console.log($scope.records)
    })

    // If Else is used when user selects a record to update. This will prepopulate the inbut fields with record data that can be updated by the user
    if ($stateParams.id == "" || $stateParams.id == null || $stateParams.id == undefined) {
      apiService.getRecordById($stateParams.id, function (record) {
        $scope.record = record
      })
    }
    else {
      apiService.getRecordById($stateParams.id, function (record) {
        $scope.record = record
      })
    }

    $scope.submitUpdatedRecord = function () {
      apiService.updateRecord($scope.record)
        .success(function (response) {
          $state.go("adminupdate");
        })
        .error(function (error) {
          console.log(error);
        })
    }
  })