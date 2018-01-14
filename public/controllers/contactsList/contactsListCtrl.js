define(['../module'], function (controllers) {
    'use strict';

    controllers.controller("ContactsListCtrl", ["$scope", 'contacts', function ($scope, contacts) {
            
            $scope.showFavoriteColor = false;
            $scope.filterPlaceHolder = "Search for contact";

            $scope.toggleFavoriteColor = function () {
                $scope.showFavoriteColor = !$scope.showFavoriteColor;
            };

            $scope.searchForContact = function () {
                console.log($scope.filterString);
            };
            $scope.contacts = contacts;
        }]);
});