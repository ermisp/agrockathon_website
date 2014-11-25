require.config({

    baseUrl: 'js/lib',

    paths: {
        app: '../app',
        vendor: 'vendor/'
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
        }
    }
});

require(['vendor/jquery', 'backbone', 'app/router', 'foundation'], function ($, Backbone, Router) {
    var router = new Router();
    Backbone.history.start();
});