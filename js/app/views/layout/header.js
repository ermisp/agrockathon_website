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

            var clickedItem = $("[href='#" + Backbone.history.fragment +"']");

            if ( typeof previousActive !== 'undefined' )
                $(previousActive).parent().removeClass('active');

            $(clickedItem).parent().addClass('active');
            previousActive = clickedItem;

        }

    });

});