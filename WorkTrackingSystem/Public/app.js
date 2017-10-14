var app = angular.module("WorkTrackingSystem", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: '/',
      templateUrl: "./views/home.html",
      controller: "homeController"
    })

    .state("admin", {
      url: '/admin',
      templateUrl: "./views/admin.html",
      controller: "adminController"
    })

    .state("adminSwitch", {
      url: '/adminswitch',
      templateUrl: "./views/adminswitch.html",
      controller: "adminController"
    })

    .state("employeeSwitch", {
      url: '/employeeswitch',
      templateUrl: "./views/employeeswitch.html",
      controller: "employeeController"
    })

    .state("employeeRecordSearch", {
      url: '/employeerecordsearch',
      templateUrl: "./views/employeerecordsearch.html",
      controller: "employeeController"
    })

    .state("reports", {
      url: '/reports',
      templateUrl: "./views/reports.html",
      controller: "employeeController"
    })

    .state("adminupdate", {
      url: '/adminupdate',
      templateUrl: "./views/adminupdate.html",
      controller: "adminController"
    })
    .state("updaterecord", {
      url: '/records/:id',
      templateUrl: "./views/updaterecord.html",
      controller: "updateRecordController"
    })
})