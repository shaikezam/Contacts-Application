define(['../module'], function (controllers) {
    'use strict';

    controllers.controller("ContactsListCtrl", ["$scope", "contactsListResource", function ($scope, contactsResource) {
            
            $scope.showFavoriteColor = false;
            $scope.filterPlaceHolder = "Search for contact";

            $scope.toggleFavoriteColor = function () {
                $scope.showFavoriteColor = !$scope.showFavoriteColor;
            };

            $scope.searchForContact = function () {
                console.log($scope.filterString);
            };

            
            contactsResource.query(function (res) {
                this.contacts = res;
            }.bind($scope));
        }]);
});