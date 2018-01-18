define(['./module'], function (services) {
    'use strict';

    services.factory("contactsResource", ["$resource", function ($resource) {
            return $resource("/api/contacts/:contactId", {contactId: '@contactId'}, {
                'update': {method: 'PUT'}
            });
        }]);
});

//Factory and Service is a just wrapper of a provider.
//Factory is mostly preferable in all cases. It can be used when you have constructor function which needs to be instantiated in different controllers.
//Service is a kind of Singleton Object. The Object return from Service will be same for all controller. It can be used when you want to have single object for entire application. Eg: Authenticated user details.