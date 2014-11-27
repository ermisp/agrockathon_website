define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Foundation          = require('foundation'),
        tpl                 = require('text!app/views/home/home-page3.html'),

        template = _.template(tpl);

    return Backbone.View.extend({

        render: function () {
            this.$el.append(template());
            return this;
        }

    });

});