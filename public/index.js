'use strict';

require.config({
    // shim configure the dependencies, exports, and custom initialization for older, traditional "browser globals" scripts
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        angular: {
            exports: 'angular'
        }
    },
    paths: {
        //path mappings for module names not found directly under baseUrl. The path settings are assumed to be relative to baseUrl
        jquery: '../scripts/jquery/dist/jquery.min',
        angular: '../scripts/angular/angular.min',
        bootstrap: '../scripts/bootstrap/dist/js/bootstrap.min'
    }
});

require([
    'require',
    'angular',
    'app',
    'jquery',
    'bootstrap'
], function (ng) {
    'use strict';
    $(window).load(function() {
        ng.bootstrap(document, ['app']);
    });
});
// $(document).ready - executes when HTML-Document is loaded and DOM is ready
// $(window).load - executes when complete page is fully loaded, including all frames, objects and images