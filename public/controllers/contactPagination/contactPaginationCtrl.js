define(['../module'], function (controllers) {
    'use strict';

    controllers.controller("ContactPaginationCtrl", ["$scope", "contacts", function ($scope, contacts) {
            $scope.filteredContacts = [];
            $scope.currentPage = 1;
            $scope.numPerPage = 5;
            $scope.maxSize = 3;
            $scope.totalItems = contacts.length;
            $scope.numPages = $scope.totalItems / $scope.numPerPage;
            $scope.contacts = contacts;
            
            $scope.toggleImage = function () {
                $scope.showImage = !$scope.showImage;
            };
            
            $scope.$watch('currentPage + numPerPage', function () {
                var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                        , end = begin + $scope.numPerPage;

                $scope.filteredContacts = $scope.contacts.slice(begin, end);
            });
        }]);
});
