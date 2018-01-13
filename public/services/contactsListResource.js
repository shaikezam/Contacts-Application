define(['./module'], function (services) {
    'use strict';

    services.factory("contactsListResource", ["$resource", function ($resource) {
            return $resource("/api/contacts/:contactId", {contactId: '@contactId'});
        }]);
});