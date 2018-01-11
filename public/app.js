define([
    'angular',
    './controllers/index',
    './services/index'
             /*'./directives/index',
             './filters/index',*/
], function (ng) {
    'use strict';

    return ng.module('contactsApplication', ['contactsApplication.controllers', 'contactsApplication.services', 'ui.router']);
});

