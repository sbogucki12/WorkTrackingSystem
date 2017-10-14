angular
  .module("WorkTrackingSystem")
  .service("apiService", function ($http) {

    // Getting branches from the database
    var _branches = [];
    this.getBranches = function (cb) {
      if (_branches.length == 0) {
        $http.get("http://REMOVED/api/Branches/")
          .success(function (response) {
            _branches = response;
            cb(_branches);
          })
          .error(function (error) {
            console.log(error);
          })
      }
      else {
        cb(_branches);
      }
    }

    // Getting correspondence types from the database
    var _correspondenceTypes = [];
    this.getCoorespondenceTypes = function (cb) {
      if (_correspondenceTypes.length == 0) {
        $http.get("http://REMOVED/api/CorrespondenceTypes/")
          .success(function (response) {
            _correspondenceTypes = response;
            cb(_correspondenceTypes);
          })
          .error(function (error) {
            console.log(error);
          })
      }
      else {
        cb(_correspondenceTypes);
      }
    }

    // Getting employees from the database
    var _employees = [];
    this.getEmployees = function (cb) {
      if (_employees.length == 0) {
        $http.get("http://REMOVED/api/Employees/")
          .success(function (response) {
            _employees = response;
            cb(_employees);
          })
          .error(function (error) {
            console.log(error);
          })
      }
      else {
        cb(_employees);
      }
    }

    // Getting records from the database
    var _records = [];
    this.getRecords = function (cb) {
      if (_records.length == 0) {
        $http.get("http://REMOVED/api/Records/")
          .success(function (response) {
            _records = response;
            cb(_records);
          })
          .error(function (error) {
            console.log(error);
          })
      }
      else {
        cb(_records);
      }
    }

    // Getting a single record from the database by id
    this.getRecordById = function (id, cb) {
      if (id == "" || id == null || id == undefined) {
        var record = {
          id: "",
          assignedTo: "",
          subject: "",
          comments: "",
          isComplete: "",
          wtsNumber: "",
          applicant: "",
          wtsCounter: "",
          initials: "",
          correspondenceName: "",
          correspondenceFlowtime: "",
          employeeName: "",
          deadline: "",
          branch: "",
          correspondence: ""
        }
        cb(record)
      }
      else {
        $http.get("http://REMOVED/api/Records/" + id)
          .success(function (response) {
            console.log(response)
            cb(response);
          })
          .error(function (error) {
            console.log(error);
          })
      }
    }

    // Using a PUT request to update a record in the database 
    this.updateRecord = function (record) {
      return $http.put('http:/REMOVED/api/Records/' + record.id, record);
    }

  })