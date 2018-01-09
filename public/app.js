define([
    'angular',
    './controllers/index',
    './services/index'
            /*'./controllers/index',
             './directives/index',
             './filters/index',
             './services/index'*/
], function (ng) {
    'use strict';

    return ng.module('contactsApplication', ['contactsApplication.controllers', 'contactsApplication.services']);
});

