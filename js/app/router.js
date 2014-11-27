define(function (require) {

    var $           = require('jquery'),
        Backbone    = require('backbone'),

        /* Menu & Footer views (initialised & rendered globally) */
        headerView    = require('app/views/layout/header'),
        header        = new headerView({el: $('.header')}),

        /* All Home Views */
        homePage1View    = require('app/views/home/home-page1'),
        homePage2View    = require('app/views/home/home-page2'),
        homePage3View    = require('app/views/home/home-page3'),

        /* Event Views */
        eventPage1View    = require('app/views/event/event-page1'),
        eventPage2View    = require('app/views/event/event-page2'),
        eventPage3View    = require('app/views/event/event-page3'),
        eventPage4View    = require('app/views/event/event-page4'),
        eventPage5View    = require('app/views/event/event-page5'),

        /* Load the participate sections */
        participatePage1View    = require('app/views/participate/participate-page1'),
        participatePage2View    = require('app/views/participate/participate-page2'),

        /* About Views */
        AboutView    = require('app/views/about/about');

    header.render();

    return Backbone.Router.extend({

        routes: {
            "": "home",
            "about": "about",
            "event": "eventPage",
            "participate": "participate"
        },

        home: function () {
            
            /* Empty the page */
            $('.container').html('');

            /* Scroll to the top */
            window.scrollTo(0, 0);

            /* Load the homepage sections */
            var homePage1 = new homePage1View({el: $('.container')});
            var homePage2 = new homePage2View({el: $('.container')});
            var homePage3 = new homePage3View({el: $('.container')});
            homePage1.render();
            homePage2.render();
            homePage3.render();
        },

        about: function() {

            /* Empty the page */
            $('.container').html('');

            /* Scroll to the top */
            window.scrollTo(0, 0);

            /* Load the about page sections */
            var about = new AboutView({el: $('.container')});
            about.render();
        },

        eventPage: function() {

            /* Empty the page */
            $('.container').html('');

            /* Scroll to the top */
            window.scrollTo(0, 0);

            /* Load the event page sections */
            var eventPage1 = new eventPage1View({el: $('.container')});
            var eventPage2 = new eventPage2View({el: $('.container')});
            var eventPage3 = new eventPage3View({el: $('.container')});
            var eventPage4 = new eventPage4View({el: $('.container')});
            var eventPage5 = new eventPage5View({el: $('.container')});

            eventPage1.render();
            eventPage2.render();
            eventPage3.render();
            eventPage4.render();
            eventPage5.render();
        },

        participate: function() {
            /* Empty the page */
            $('.container').html('');

            /* Scroll to the top */
            window.scrollTo(0, 0);

            /* Load the participate page sections */
            var participatePage1 = new participatePage1View({el: $('.container')});
            var participatePage2 = new participatePage2View({el: $('.container')});

            participatePage1.render();
            participatePage2.render();
        }

    });

});