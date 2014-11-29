define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Foundation          = require('foundation'),
        tpl                 = require('text!app/views/event/event-page5.html'),

        template = _.template(tpl);

    return Backbone.View.extend({

        events: {
            "click #go-to-participate": "gotoParticipate"
        },

        render: function () {
            this.$el.append(template());
            return this;
        },

        gotoParticipate: function() {
            console.log('cool');
            router.navigate("participate", {trigger: true});
        }

    });

});