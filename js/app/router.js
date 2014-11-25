define(function (require) {

    var $           = require('jquery'),
        Backbone    = require('backbone'),

        /* Menu & Footer views (initialised & rendered globally) */
        headerView    = require('app/views/layout/header'),
        header        = new headerView({el: $('.header')}),

        /* All Home Views */
        homePage1View    = require('app/views/home/home-page1'),

        /* About Views */
        AboutView    = require('app/views/about/about');

    header.render();

    return Backbone.Router.extend({

        routes: {
            "": "home",
            "about": "about"
        },

        home: function () {
            var homePage1 = new homePage1View({el: $('.container')});
            homePage1.render();
        },

        about: function() {
            var about = new AboutView({el: $('.container')});
            about.render();
        }

    });

});