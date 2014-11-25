define(function (require) {

    var $           = require('jquery'),
        Backbone    = require('backbone'),

        /* All Home Views */
        homePage1View    = require('app/views/home/home-page1'),

        /* About Views */
        AboutView    = require('app/views/about/about'),

        $body = $('body');

    return Backbone.Router.extend({

        routes: {
            "": "home",
            "about": "about"
        },

        home: function () {
            var homePage1 = new homePage1View({el: $body});
            homePage1.render();
        },

        about: function() {
            var about = new AboutView({el: $body});
            about.render();
        }

    });

});