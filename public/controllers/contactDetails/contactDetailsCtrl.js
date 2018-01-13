define(['../module'], function (controllers) {
    'use strict';

    controllers.controller("ContactDetailsCtrl", ["$scope", "$routeParams", "contactsListResource", function ($scope, $routeParams, contactsResource) {
            var id = $routeParams.contactId;
            $scope.title = "Contact Details:";

            contactsResource.get({contactId: id}, function (res) {
                this.contact = res;
            }.bind($scope));

        }]);
});
