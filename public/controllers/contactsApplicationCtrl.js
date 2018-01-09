define(['./module'], function (controllers) {
    'use strict';

    controllers.controller("ContactsApplicationCtrl", ["$scope", function ($scope) {

            $scope.toggleFavoriteColor = function () {
                $scope.showFavoriteColor = !$scope.showFavoriteColor;
            };

            $scope.showFavoriteColor = false;
            /*ContactsResource.query(function(data) {
                this.contacts = data;
                $scope.$apply();
            }.bind($scope));*/
            $.get('/data', function (data) {
                this.contacts = data;
                $scope.$apply();
            }.bind($scope));
        }]);
});