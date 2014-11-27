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
        'vendor/modernizr': {
            deps: ['vendor/jquery'],
            exports: 'Modernizr'
        },
        'foundationSrc/foundation.topbar': {
            deps: ['vendor/jquery', 'foundation'],
            exports: 'Foundation-topbar'
        },
        'foundationSrc/foundation.reveal': {
            deps: ['vendor/jquery', 'foundation'],
            exports: 'Foundation-reveal'
        },
        'vendor/jquery': {
            exports: '$'
        },
        'vendor/fastclick': {
            deps: ['vendor/jquery'],
            exports: 'Fastclick'
        }
    }
});

require(['vendor/jquery', 'backbone', 'app/router'], function ($, Backbone, Router) {
    var router = new Router();
    Backbone.history.start();
});

require([   'vendor/jquery', 
            'foundation', 
            'foundationSrc/foundation.reveal', 
            'foundationSrc/foundation.topbar',
            'vendor/modernizr',
            'vendor/fastclick'
        ], function ($) {
            jQuery(document).ready(function() { 
            jQuery(this).foundation();
        })
});
