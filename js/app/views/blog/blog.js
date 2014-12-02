define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Foundation          = require('foundation'),
        tpl                 = require('text!app/views/blog/blog.html'),

        template = _.template(tpl);

    return Backbone.View.extend({

        render: function () {
            console.log(this.collection.models);
            this.$el.append(template());
            return this;
        }
    });

});