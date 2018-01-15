define(['../module'], function (controllers) {
    'use strict';

    controllers.controller("ContactDetailsEditCtrl", ["$scope", "$routeParams", "contact", function ($scope, $routeParams, contact) {
            var id = $routeParams.contactId, newDate = contact.birthday.split(".");
            
            contact.birthday = new Date(newDate[2], newDate[1] - 1, newDate[0]);
            
            $scope.format = 'dd.MM.yyyy';
            $scope.title = "Edit Contact Details:";
            $scope.isOpen = false;
            $scope.contact = contact;


            $scope.openCalendar = function (e) {
                e.preventDefault();
                e.stopPropagation();
                $scope.isOpen = !$scope.isOpen;
            };
            //{{one way}}
            //ng-modal="data.data" two way
        }]);
});
