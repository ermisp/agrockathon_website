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

            for (var i = 0; i < this.collection.length; i++) {
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
            var urlCheck = /\b(([\w-]+:\/\/?|www[.])[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/)))/m;

            /* Define a video regex to show the thumbnail if video (only youtube for now) is in media */
            var videoRegEx = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i; 

            var media = this.collection.get(inspirationID).get('media');

            if (media.match(videoRegEx)) {
                 media = '<iframe class="tiny-margin-top" width="560" height="315" src="http://www.youtube.com/embed/' + media.match(videoRegEx)[1] + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
            } else {
                media = '<img class="tiny-margin-top" src="' + media +'" />';
            }

            /* Fill the modal with the information from this inspiration */
            var title = '<h4><strong>' + this.collection.get(inspirationID).get('title') + '</strong></h4>';
            var body = '<div class="width-80 centered tiny-margin-top">' + this.collection.get(inspirationID).get('body').replace(urlCheck, '<a class="green" href="$&" target="_blank">$&</a>') +'</div>';

            $('#modal-content').html(title + media + body);
            $('#inspirationModal').foundation('reveal', 'open');
        },
    });

});