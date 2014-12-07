define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Foundation          = require('foundation'),
        SingleArticleView   = require('app/views/blog/single_article'),
        tpl                 = require('text!app/views/blog/blog.html'),


        template = _.template(tpl);

    return Backbone.View.extend({

        events: {
            'click .single-inspiration': 'revealModal'
        },

        render: function () {

            var inspirations = [];

            this.$el.append(template());

            for (var i = this.collection.length - 1; i >= 0 ; i--) {
                inspirations[i] = new SingleArticleView({el: $('.inspirations'), model: this.collection.models[i]});
                inspirations[i].render();
            }

            /* We have added elements in the 'inspiration' div so we need to recalculate it's height */
            var height = 0;
            $(".inspirations > *").each(function () {
                height += $(this).height();
            });

            $('.inspirations').height(height + $('#blog-bckg').height());
            $('#blog-bckg').addClass('bckg-image-farmers-white');

            return this;
        },

        revealModal: function(e) {
            e.stopPropagation();

            /* Get the id of the post being clicked */
            var inspirationID = $(e.target).parent().closest('.single-inspiration').attr('id');

            /* Define a regular expression to find links within the text & replace them with hyperlinks */
            //var urlCheck = /\b(([\w-]+:\/\/?|www[.])[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/)))/i;

            /* Fill the modal with the information from this inspiration */
            var title = '<h4><strong>' + this.collection.get(inspirationID).get('title') + '</strong></h4>';
            var media = '<img src="' + this.collection.get(inspirationID).get('media') +'" />';
            var body = '<p>' + this.collection.get(inspirationID).get('body') +'</p>';

            $('#modal-content').html(title + media + body);
            $('#inspirationModal').foundation('reveal', 'open');
        },
    });

});