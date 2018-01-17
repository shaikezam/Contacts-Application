define(['../module'], function (controllers) {
    'use strict';

    controllers.controller("ContactDetailsDeleteCtrl", ["$scope", "$location", "$routeParams", "contactsResource", "contact", function ($scope, $location, $routeParams, contactsResource, contact) {
            $scope.enableForm = {
                contactId: true,
                contactFirstName: true,
                contactLastName: true,
                contactEmail: true,
                contactGender: true,
                contactBirthDay: true,
                contactAddress: true,
                action: "delete"
            };
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

            $scope.deleteContact = function (event) {
                var birthday = contact.birthday;
                contact.birthday = birthday.getDate().toString() + '.' +  (birthday.getMonth()+1).toString() + '.' +  birthday.getFullYear().toString();
                console.log($scope.contact);
                event.preventDefault() //Form submission canceled because the form is not connected
                contactsResource.remove ({contactId: $routeParams.contactId}, $scope.contact);
                $location.path("/!#");
            };
            //{{one way}}
            //ng-modal="data.data" two way
        }]);
});
