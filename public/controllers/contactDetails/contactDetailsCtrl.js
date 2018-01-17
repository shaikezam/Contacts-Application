define(['../module'], function (controllers) {
    'use strict';

    controllers.controller("ContactDetailsCtrl", ["$scope", "$location", "$routeParams", "contact", function ($scope, $location, $routeParams, contact) {
            $scope.editMode = true;
            var id = $routeParams.contactId, newDate = contact.birthday.split(".");

            contact.birthday = new Date(newDate[2], newDate[1] - 1, newDate[0]);

            $scope.title = "Contact Details:";
            $scope.contact = contact;

            $scope.format = 'dd.MM.yyyy';
            $scope.isOpen = false;
            $scope.contact = contact;


            $scope.openCalendar = function (e) {
                e.preventDefault();
                e.stopPropagation();
                $scope.isOpen = !$scope.isOpen;
            };
        }]);
});
