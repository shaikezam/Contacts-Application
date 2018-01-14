define(['./app', 'angularRoute'], function (app) {
    'use strict';
    return app.config(function ($routeProvider) {
        $routeProvider.when("/contacts-list", {
            templateUrl: "./controllers/contactsList/contactsListView.html",
            controller: "ContactsListCtrl",
            resolve: {
                //contactsResource: "contactsResource",
                contacts: ["contactsResource", function (contactsResource) {
                        //return contactsResource.query();
                        return contactsResource.query().$promise.then(function (contacts) {
                            return contacts;
                        }, function () {
                            console.error("Not found");
                        });
                    }]
            }
        }).when("/contacts-list/:contactId/", {
            templateUrl: "./controllers/contactDetails/contactDetailsView.html",
            controller: "ContactDetailsCtrl",
            resolve: {
                contactsResource: "contactsResource",
                contact: function (contactsResource, $route) {
                    return contactsResource.get({contactId: $route.current.params.contactId}).$promise.then(function (contact) {
                        return contact;
                    }, function () {
                        console.error("Not found");
                    });
                }
            }
        }).when("/contacts-list/:contactId/contactDetailsEdit", {
            templateUrl: "./controllers/contactDetailsEdit/contactDetailsEditView.html",
            controller: "ContactDetailsEditCtrl",
            resolve: {
                contactsResource: "contactsResource",
                contact: function (contactsResource, $route) {
                    return contactsResource.get({contactId: $route.current.params.contactId}).$promise.then(function (contact) {
                        return contact;
                    }, function () {
                        console.error("Not found");
                    });
                }
            }
        }).when("/", {
            templateUrl: "./controllers/welcome/welcomeView.html"
        }).otherwise("/");
    });
    //$route.current.params are the parameters you pass while resolving the route and $routeParams are parameters that are appended to url
    //AngularJS does not recognize any changes to $routeParams until after the route changes
});