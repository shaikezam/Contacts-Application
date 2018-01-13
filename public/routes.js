define(['./app', 'angularRoute'], function (app) {
    'use strict';
    return app.config(function ($routeProvider) {
        $routeProvider.when("/contacts-list", {
            templateUrl: "./controllers/contactsList/contactsListView.html",
            controller: "ContactsListCtrl"
        }).when("/contacts-list/:contactId", {
            templateUrl: "./controllers/contactDetails/contactDetailsView.html",
            controller: "ContactDetailsCtrl"
        }).when("/", {
            templateUrl: "./controllers/welcome/welcomeView.html"
        }).otherwise("/");
    });
    /*return app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise("/");
     $stateProvider.state({
     name: "home",
     templateUrl: "/"
     }).state({
     name: "contactsList",
     url: "/contacts-list",
     templateUrl: "./controllers/contactsList/contactsListView.html",
     controller: "ContactsApplicationCtrl"
     }).state({
     name: "contactEdit",
     url: "/contact-edit",
     templateUrl: "./controllers/contactEdit/contactEditView.html/:contactId",
     controller: "ContactEditCtrl"
     });
     }]);*/
});