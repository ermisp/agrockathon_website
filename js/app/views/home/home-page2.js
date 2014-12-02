define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Foundation          = require('foundation'),
        tpl                 = require('text!app/views/home/home-page2.html'),

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
            var sectionPos = $("#animation-element-1-trigger").position().top;

            var hasReached = (scrollPos + $(window).height() >= sectionPos);
            var animationEnd = $("#animation-element-1").hasClass("animation-fade-up");

            if ((hasReached) && (!animationEnd)) {
                $("#animation-element-1-trigger").addClass("animation-fade-up");
            }
        }

    });

});