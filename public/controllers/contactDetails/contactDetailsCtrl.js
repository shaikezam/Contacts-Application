define(['../module'], function (controllers) {
    'use strict';

    controllers.controller("ContactDetailsCtrl", ["$scope", "$routeParams", "contact", function ($scope, $routeParams, contact) {
            var id = $routeParams.contactId;
            $scope.title = "Contact Details:";
            $scope.contact = contact;

        }]);
});
