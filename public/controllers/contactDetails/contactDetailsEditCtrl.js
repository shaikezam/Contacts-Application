define(['../module'], function (controllers) {
    'use strict';

    controllers.controller("ContactDetailsEditCtrl", ["$scope", "$location", "$routeParams", "contact", function ($scope, $location, $routeParams, contact) {
            $scope.editMode = false;
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
            
            $scope.saveContact = function(event) {
                console.log($scope.contact);
                event.preventDefault() //Form submission canceled because the form is not connected
                $location.path("/!#");
            };
            //{{one way}}
            //ng-modal="data.data" two way
        }]);
});
