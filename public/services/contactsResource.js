define(['./module'], function (services) {
    'use strict';

    services.factory("contactsResource", ["$resource", function ($resource) {
            return $resource("/api/contacts/:contactId", {contactId: '@contactId'});
        }]);
});