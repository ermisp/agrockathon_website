define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Foundation          = require('foundation'),
        SingleArticleView   = require('app/views/blog/single_article'),
        tpl                 = require('text!app/views/blog/blog.html'),


        template = _.template(tpl);

    return Backbone.View.extend({

        render: function () {

            var singleInspiration;

            this.$el.append(template());

            for (var i = 0; i < this.collection.length; i++) {
                singleInspiration = new SingleArticleView({el: $('.inspirations'), model: this.collection.models[i]});
                singleInspiration.render();
            }

            /* We have added elements in the 'inspiration' div so we need to recalculate it's height */
            var height = 0;
            $(".inspirations > *").each(function () {
                height += $(this).height();
            });

            $('.inspirations').height(height + $('#blog-bckg').height());
            $('#blog-bckg').addClass('bckg-image-farmers-white');

            return this;
        }
    });

});