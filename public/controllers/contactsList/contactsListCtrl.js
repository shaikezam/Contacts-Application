define(['../module'], function (controllers) {
    'use strict';

    controllers.controller("ContactsListCtrl", ["$scope", 'contacts', function ($scope, contacts) {
            
            $scope.showImage = false;
            $scope.filterPlaceHolder = "Search for contact";

            $scope.toggleImage = function () {
                $scope.showImage = !$scope.showImage;
            };

            $scope.searchForContact = function () {
                console.log($scope.filterString);
            };
            $scope.contacts = contacts;
        }]);
});