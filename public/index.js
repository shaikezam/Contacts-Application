'use strict';

require.config({
    // shim configure the dependencies, exports, and custom initialization for older, traditional "browser globals" scripts
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        angular: {
            exports: 'angular',
        },
        angularResource: {
            deps: ['angular'],
            exports: 'angularResource'
        },
        angularRoute: {
            deps: ['angular'],
            exports: 'angularRoute'
        },
        angularUIRouter: {
            deps: ['angular'],
            exports: 'angularUIRouter'
        }
    },
    paths: {
        //path mappings for module names not found directly under baseUrl. The path settings are assumed to be relative to baseUrl
        jquery: '../scripts/jquery/dist/jquery.min',
        angular: '../scripts/angular/angular',  
        bootstrap: '../scripts/bootstrap/dist/js/bootstrap.min',
        angularResource: '../scripts/angular-resource/angular-resource',
        angularRoute: '../scripts/angular-route/angular-route',
        angularUIRouter: '../scripts/angular-ui-router/release/angular-ui-router'
    }
});

require([
    'require',
    'angular',
    'app',
    './routes',
    'jquery',
    'bootstrap'
], function (require, ng) {
    'use strict';
    ng.bootstrap(document, ['contactsApplication']);
    
});
// $(document).ready - executes when HTML-Document is loaded and DOM is ready
// $(window).load - exeindecutes when complete page is fully loaded, including all frames, objects and images