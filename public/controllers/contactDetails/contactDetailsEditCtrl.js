define(['../module'], function (controllers) {
    'use strict';

    controllers.controller("ContactDetailsEditCtrl", ["$scope", "$location", "$routeParams", "contactsResource", "contact", function ($scope, $location, $routeParams, contactsResource, contact) {
            $scope.enableForm = {
                contactId: true,
                contactFirstName: false,
                contactLastName: false,
                contactEmail: false,
                contactGender: false,
                contactBirthDay: true,
                contactAddress: false,
                action: "save"
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

            $scope.saveContact = function (event) {
                var birthday = contact.birthday;
                contact.birthday = birthday.getDate().toString() + '.' +  (birthday.getMonth()+1).toString() + '.' +  birthday.getFullYear().toString();
                console.log($scope.contact);
                event.preventDefault() //Form submission canceled because the form is not connected
                contactsResource.update({contactId: $routeParams.contactId}, $scope.contact);
                $location.path("/!#");
            };
            //{{one way}}
            //ng-modal="data.data" two way
        }]);
});
