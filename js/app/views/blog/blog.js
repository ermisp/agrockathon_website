define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Foundation          = require('foundation'),
        tpl                 = require('text!app/views/blog/blog.html'),
        singleArticle       = require('text!app/views/blog/single_article.js'),

        template = _.template(tpl);

    return Backbone.View.extend({

        render: function () {

            /*Define the articles */
            //var article = new singleArticle({el: $('.articles')});

            this.$el.append(template());
            return this;


        }
    });

});