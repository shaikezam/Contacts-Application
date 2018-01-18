define(['../module'], function (controllers) {
    'use strict';

    controllers.controller("ContactsListCtrl", ["$scope", 'contacts', function ($scope, contacts) {

            $scope.showImage = false;
            $scope.filterPlaceHolder = "Search for contact";

            $scope.toggleImage = function () {
                $scope.showImage = !$scope.showImage;
            };

            $scope.searchForContact = function () {
                for (var i = 0; i < contacts.length; i++) {
                    var contactName = ($scope.contacts[i]['first_name'] + ' ' + $scope.contacts[i]['last_name']).toLowerCase(),
                            toShow = contactName.includes($scope.filterString.toLowerCase()) ? true : false;
                    $scope.contacts[i]['hideContact'] = toShow;
                }
            };
            
            $scope.contacts = contacts;
            
            for (var i = 0; i < contacts.length; i++) {
                $scope.contacts[i]['hideContact'] = true;
            }
        }]);
});