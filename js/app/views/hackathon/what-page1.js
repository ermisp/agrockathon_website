define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Foundation          = require('foundation'),
        FoundationAcc       = require('foundationSrc/foundation.accordion'),
        tpl                 = require('text!app/views/hackathon/what-page1.html'),

        template = _.template(tpl);

    return Backbone.View.extend({

        render: function () {
            this.$el.append(template());
            return this;

        }

    });

});