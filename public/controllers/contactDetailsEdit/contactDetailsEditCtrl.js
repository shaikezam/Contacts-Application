define(['../module', 'angularUiBootstrap'], function (controllers) {
    'use strict';

    controllers.controller("ContactDetailsEditCtrl", ["$scope", "$routeParams", "contact", function ($scope, $routeParams, contact) {
            var id = $routeParams.contactId;
            $scope.title = "Edit Contact Details:";
            $scope.datePicker = {
                opened: false
            };
            $scope.contact = contact;
            $scope.saveEditedContact = function () {
                console.log("LOL");
            }.bind($scope);
            $scope.openDatePicker = function ($event) {
                $event.preventDefault(); //prevent default actions from been triggered
                $event.stopPropagation(); //prevent from the event to propagate

                this.datePicker.opened = !this.datePicker.opened;
            }.bind($scope);
            //{{one way}}
            //ng-modal="data.data" two way
        }]);
});
