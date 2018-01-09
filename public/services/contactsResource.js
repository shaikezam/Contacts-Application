define(['./module'], function (services) {
    'use strict';

    services.factory("contactsResource", ["$resource", function ($resource) {
            return $resource("/contacts");
        }]);
});