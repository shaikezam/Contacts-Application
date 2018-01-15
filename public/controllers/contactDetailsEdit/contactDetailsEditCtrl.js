define(['../module'], function (controllers) {
    'use strict';

    controllers.controller("ContactDetailsEditCtrl", ["$scope", "$routeParams", "contact", function ($scope, $routeParams, contact) {
            var id = $routeParams.contactId;
            $scope.title = "Edit Contact Details:";

            $scope.contact = contact;
            $scope.saveEditedContact = function () {
                console.log("LOL");
            }.bind($scope);
            //{{one way}}
            //ng-modal="data.data" two way
        }]);
});
