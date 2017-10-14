angular
  .module("WorkTrackingSystem")
  .controller("adminController", function ($scope, $state, apiService, $http) {

    // Get Correspondence Types from API (API consumed in apiService)
    $scope.correspondenceTypes = [];
    apiService.getCoorespondenceTypes(function (response) {
      $scope.correspondenceTypes = response;
      console.log($scope.correspondenceTypes)
    })

    // Get Records from API (API consumed in apiService)
    $scope.records = [];
    apiService.getRecords(function (response) {
      console.log(response)
      $scope.records = response;
      console.log($scope.records)
    })

    // Get Employees from API (API consumed in apiService)
    $scope.employees = [];
    apiService.getEmployees(function (response) {
      console.log(response)
      $scope.employees = response;
      console.log($scope.employees)
    })

    // Get branches from API (API consumed in apiService)
    $scope.branches = [];
    apiService.getBranches(function (response) {
      console.log(response)
      $scope.branches = response;
      console.log($scope.branches)
    })

    // Setting the flowtime.  Each correspondence type has its own flowtime
    $scope.correspondence = "";
    $scope.correspondenceFlowtime = 0;
    $scope.setCorrespondence = function () {
      for (var i = 0; i < $scope.correspondenceTypes.length; i++) {
        if ($scope.correspondenceId == $scope.correspondenceTypes[i].id) {
          $scope.correspondence = $scope.correspondenceTypes[i];
          $scope.correspondenceName = $scope.correspondenceTypes[i].name;
          $scope.correspondenceFlowtime = $scope.correspondenceTypes[i].flowtime;
        }
      }
    }

    // Setting the flowtime as a deadline date
    $scope.deadline = "";
    $scope.getDeadline = function () {
      var someDate = new Date();
      var numberOfDaysToAdd = $scope.correspondenceFlowtime;
      someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
      var dd = someDate.getDate();
      var mm = someDate.getMonth() + 1;
      var y = someDate.getFullYear();
      $scope.deadline = mm + '/' + dd + '/' + y;
      console.log("test complete");
    }

    // setting branch as the branch selected by the user
    $scope.setBranch = function () {
      for (var i = 0; i < $scope.branches.length; i++) {
        if ($scope.branchId == $scope.branches[i].id) {
          $scope.branch = $scope.branches[i];
        }
      }
    }

    // Setting the "WTS Number". The WTS Number is a squential counter / branch name / year (year isn't currently designed to update programmatically)
    $scope.records.counter = 0;
    $scope.fullWTSNumber = "";
    $scope.generateWTSNumber = function (records) {
      $scope.records.counter = $scope.records[$scope.records.length - 1].id + 1;
      console.log($scope.records.counter)
      $scope.fullWTSNumber = $scope.branch.nomenclature + "/" + $scope.records.counter + "/2017";
    }

    // Setting employee as the employee selected by the user
    $scope.employee = {};
    $scope.setEmployee = function () {
      for (var i = 0; i < $scope.employees.length; i++) {
        if ($scope.employeeId == $scope.employees[i].id) {
          $scope.employee = $scope.employees[i];
        }
      }
    }

    // Saving all of the user selection as properties to the record object and then posting the record to the database.  NOTE: IsComplete needs to be added as a choice as well as a column in the database
    $scope.myValue = false;
    $scope.recordSavedMessage = "Record Saved!"
    $scope.hotdogApplicant = "";
    $scope.saveRecord = function () {
      $scope.record = {
        CorrespondenceType: $scope.correspondenceName,
        WTSNumber: $scope.fullWTSNumber,
        Applicant: $scope.hotdogApplicant,
        Counter: $scope.records.wtsCounter,
        Subject: $scope.correspondenceTypes.subject,
        // IsComplete: 0,
        Comments: $scope.records.comments,
        AssignedTo: $scope.employee.name,
        Deadline: $scope.deadline,
        Branch: $scope.branch.name
      }
      $http.post('http://REMOVED/api/Records/', $scope.record);
      $scope.myValue = true;
    }

    // All below are click events that change page "states" when a user clicks the button. Buttons are on various pages.
    $scope.updateRecord = function (id) {
      console.log($scope.record)
      $state.go("updaterecord", { id: id })
    }

    $scope.goToAdmin = function () {
      $state.go("admin");
    }

    $scope.goAdminUpdate = function () {
      $state.go("adminupdate");
    }

    $scope.showSearch = function () {
      $scope.showSearch1 = true;
    }

    $scope.reloadAdmin = function () {
      location.reload();
    }
  })