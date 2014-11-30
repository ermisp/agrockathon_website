define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Foundation          = require('foundation'),
        tpl                 = require('text!app/views/layout/header.html'),

        template = _.template(tpl);

    return Backbone.View.extend({
        previousActive: null,

        render: function () {
            this.$el.append(template());
            return this;
        },

        setActive: function() {

            if ( typeof previousActive !== 'undefined' )
                $('.' + previousActive + '-btn').removeClass('active');

            $('.' + Backbone.history.fragment + '-btn').addClass('active');
            previousActive = Backbone.history.fragment;
        }

    });

});