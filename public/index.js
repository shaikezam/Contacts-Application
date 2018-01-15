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
        },
        angularUiBootstrap: {
            deps: ['angular'],
            exports: 'angularUiBootstrap'
        },
        angularUiBootstrapTpls: {
            deps: ['angular'],
            exports: 'angularUiBootstrapTpls'
        }
    },
    paths: {
        //path mappings for module names not found directly under baseUrl. The path settings are assumed to be relative to baseUrl
        jquery: '../scripts/jquery/dist/jquery.min',
        angular: '../scripts/angular/angular',  
        bootstrap: '../scripts/bootstrap/dist/js/bootstrap.min',
        angularResource: '../scripts/angular-resource/angular-resource',
        angularRoute: '../scripts/angular-route/angular-route',
        angularUIRouter: '../scripts/@uirouter/angularjs/release/angular-ui-router',
        angularUiBootstrapTpls: '../scripts/angular-ui-bootstrap/dist/ui-bootstrap-tpls',
        angularUiBootstrap: '../scripts/angular-ui-bootstrap/dist/ui-bootstrap'
    }
});

require([
    'require',
    'angular',
    'app',
    './routes',
    'jquery',
    'bootstrap',
    'angularUiBootstrapTpls'
], function (require, ng) {
    'use strict';
    ng.bootstrap(document, ['contactsApplication']);
    
});
// $(document).ready - executes when HTML-Document is loaded and DOM is ready
// $(window).load - exeindecutes when complete page is fully loaded, including all frames, objects and images