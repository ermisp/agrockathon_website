define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Foundation          = require('foundation'),
        tpl                 = require('text!app/views/blog/single_article.html');

        template = _.template(tpl);

    return Backbone.View.extend({

        render: function (finalInspiration) {
            var data = {
                "inspiration": this.model.toJSON(),
                "final": "", 
            };

            if (!finalInspiration) {
                this.$el.append(template(data));
            } else {
                data.final = "end";
                this.$el.append(template(data));
            }
            return this;
        }
    });

});