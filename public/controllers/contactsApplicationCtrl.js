define(['./module'], function (controllers) {
    'use strict';

    controllers.controller("ContactsApplicationCtrl", ["$scope", "contactsResource", function ($scope, contactsResource) {

            $scope.toggleFavoriteColor = function () {
                $scope.showFavoriteColor = !$scope.showFavoriteColor;
            };

            $scope.showFavoriteColor = false;
            contactsResource.query(function (res) {
                this.contacts = res;
            }.bind($scope));
        }]);
});