require.config({

    baseUrl: 'js/lib',

    paths: {
        app: '../app',
        vendor: 'vendor/',
        foundationSrc: 'foundation'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'vendor/jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'foundation': {
            deps: ['vendor/modernizr', 'vendor/jquery'],
            exports: 'Foundation'
        },
        'foundation-topbar': {
            deps: ['vendor/jquery', 'foundationSrc/foundation.topbar'],
            exports: 'Foundation-topbar'
        }
    }
});

require(['vendor/jquery', 'backbone', 'app/router'], function ($, Backbone, Router) {
    var router = new Router();
    Backbone.history.start();
});

require(['vendor/jquery', 'foundation'], function ($) {
    jQuery(document).ready(function() { 
        jQuery(this).foundation();
    })
});