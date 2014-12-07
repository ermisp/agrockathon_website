define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Foundation          = require('foundation'),
        tpl                 = require('text!app/views/blog/single_article.html');

        template = _.template(tpl);

    return Backbone.View.extend({

        render: function () {
            var data = {"inspiration": this.model.toJSON() };
            this.$el.append(template(data));
            console.log(this.model);
            return this;
        }
    });

});