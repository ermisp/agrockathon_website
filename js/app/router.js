define(function (require) {

    var $           = require('jquery'),
        Backbone    = require('backbone'),

        /* All the views that are required */
        homePage1View    = require('app/views/home/home-page1'),

        $body = $('body');

    return Backbone.Router.extend({

        routes: {
            "": "home"
        },

        home: function () {
            var homePage1 = new homePage1View({el: $body});
            homePage1.render();
        },

    });

});