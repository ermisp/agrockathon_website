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
        'app/router': {
            deps: ['backbone'],
            exports: 'Router'
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
            deps: ['foundation'],
            exports: 'Foundation-topbar'
        },
        'foundationSrc/foundation.reveal': {
            deps: ['foundation'],
            exports: 'Foundation-reveal'
        },
        'foundationSrc/foundation.accordion': {
            deps: ['foundation'],
            exports: 'Foundation-accordion'
        },
        'vendor/jquery': {
            exports: '$'
        },
        'vendor/fastclick': {
            deps: ['vendor/jquery'],
            exports: 'Fastclick'
        },
        'facebook-SDK': {
            deps: [],
            exports: 'Facebook'
        },
        'google-analytics': {
            deps: [],
            exports: 'GAanalytics'
        },
    }
});

require(['vendor/jquery', 'backbone', 'app/router', 'google-analytics'], function ($, Backbone, Router) {
    router = new Router();
    Backbone.history.start();
});

require([   'vendor/fastclick',
            'foundation',
            'app/router', 
            'foundationSrc/foundation.reveal', 
            'foundationSrc/foundation.topbar',
            'foundationSrc/foundation.accordion'
        ]);
