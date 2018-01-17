define(['../module'], function (controllers) {
    'use strict';

    controllers.controller("ContactDetailsNewCtrl", ["$scope", "$location", "$routeParams", "contactsResource", "contacts", function ($scope, $location, $routeParams, contactsResource, contacts) {
            $scope.enableForm = {
                contactId: true,
                contactFirstName: false,
                contactLastName: false,
                contactEmail: false,
                contactGender: false,
                contactBirthDay: false,
                contactAddress: false,
                action: "create"
            };
            $scope.contact = {
                id: Math.max.apply(Math, contacts.map(function (contact) {
                    return contact['id'];
                })) + 1,
                image: "/assets/contact.svg"
            };

            $scope.format = 'dd.MM.yyyy';
            $scope.title = "New Contact:";
            $scope.isOpen = false;

            $scope.openCalendar = function (e) {
                e.preventDefault();
                e.stopPropagation();
                $scope.isOpen = !$scope.isOpen;
            };

            $scope.createContact = function (event) {
                var birthday = $scope.contact.birthday;
                $scope.contact.birthday = birthday.getDate().toString() + '.' + (birthday.getMonth() + 1).toString() + '.' + birthday.getFullYear().toString();
                console.log($scope.contact);
                event.preventDefault() //Form submission canceled because the form is not connected
                contactsResource.save({contactId: $scope.contact.id}, $scope.contact);
                $location.path("/!#");
            };
            //{{one way}}
            //ng-modal="data.data" two way
        }]);
});
