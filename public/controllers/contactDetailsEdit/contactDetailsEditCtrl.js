define(['../module'], function (controllers) {
    'use strict';

    controllers.controller("ContactDetailsEditCtrl", ["$scope", "$routeParams", "contact", function ($scope, $routeParams, contact) {
            var id = $routeParams.contactId;
            $scope.title = "Contact Details:";
            $scope.contact = contact;

        }]);
});
