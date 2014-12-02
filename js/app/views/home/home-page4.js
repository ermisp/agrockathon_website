define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Foundation          = require('foundation'),
        tpl                 = require('text!app/views/home/home-page4.html'),

        template = _.template(tpl);

    return Backbone.View.extend({

        initialize: function() {
            _.bindAll(this, 'triggerAnimation');

            $(window).scroll(this.triggerAnimation);
        },

        render: function () {
            this.$el.append(template());
            return this;
        },

        triggerAnimation: function() {
            var scrollPos = $(window).scrollTop();
            var sectionPos = $("#trigger-annimation").position().top;

            var hasReached = (scrollPos + $(window).height() >= sectionPos)
            var animationEnd = $("#fade-in-left-1").hasClass("fade-in-left-1");

            if ((hasReached) && (!animationEnd)) {
                $("#fade-in-left-1").addClass("fade-in-left-1");
                $("#fade-in-left-2").addClass("fade-in-left-2");
                $("#fade-in-right-1").addClass("fade-in-right-1");
                $("#fade-in-right-2").addClass("fade-in-right-2");

                $("#fade-in-bottom-1").addClass("fade-in-bottom-1");
                $("#fade-in-bottom-2").addClass("fade-in-bottom-2");
            }
        }

    });

});