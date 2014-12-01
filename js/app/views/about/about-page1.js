define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Foundation          = require('foundation'),
        tpl                 = require('text!app/views/about/about-page1.html'),

        template = _.template(tpl);

    return Backbone.View.extend({

        events: {
            "click #ermis-cv-btn": "toggleErmisCV",
            "click #george-cv-btn": "toggleGeorgeCV",
        },

        render: function () {
            this.$el.append(template()); 

            /* Make sure the height is ok */
            var ermisHeight = ($("#ermis").height() + ( $("#ermis-cv-onRecord").height() > $("#ermis-cv-offRecord").height() ? $("#ermis-cv-onRecord").height() : $("#ermis-cv-offRecord").height()));
            var georgeHeight = ($("#george").height() + ( $("#george-cv-onRecord").height() > $("#george-cv-offRecord").height() ? $("#george-cv-onRecord").height() : $("#george-cv-offRecord").height()));


            /* Check if we're on desktop or tablet */
            console.log($(".bckg-ermis-george").css("color"));
            if ($(".bckg-ermis-george").css("color") == 'rgb(255, 0, 0)') {
                $(".leave-george-margin").css('padding-top', 0.8*ermisHeight);
                var totalHeight = 1.5*ermisHeight + georgeHeight;
            }
            else
                var totalHeight = 1.5*(ermisHeight > georgeHeight ? ermisHeight : georgeHeight);

            $(".bckg-ermis-george").height(totalHeight);

            return this;
        },


        toggleErmisCV: function(e) {

            var onRecord = $("#ermis-cv-btn").is(":checked");

            if (onRecord) {
                $('#ermis-cv-label').html('On-Record');
                $('#ermis').addClass('black');
                $('.ermis-social').addClass('black');

                $( "#ermis-cv-offRecord" ).animate({
                    opacity: 0,
                    left: "-=10%"
                    }, 500, function() {
                        $( "#ermis-cv-onRecord" ).css("display", "block");
                        $( "#ermis-cv-offRecord" ).css("display", "none");
                        $( "#ermis-cv-onRecord" ).animate({
                           opacity: 1, 
                           left: "+=0"
                        }, 500);
                });

            } else {
                $('#ermis-cv-label').html('Off-Record');
                $('#ermis').removeClass('black');
                $('.ermis-social').removeClass('black');

                $( "#ermis-cv-onRecord" ).animate({
                    opacity: 0,
                    left: "0%"
                    }, 500, function() {
                        $( "#ermis-cv-offRecord" ).css("display", "block");
                        $( "#ermis-cv-onRecord" ).css("display", "none");
                        $( "#ermis-cv-offRecord" ).animate({
                           opacity: 1, 
                           left: "+=10%"
                        }, 500);
                });
            }
        },

        toggleGeorgeCV: function(e) {

            var onRecord = $("#george-cv-btn").is(":checked");

            if (onRecord) {
                $('#george-cv-label').html('On-Record');
                $('#george').addClass('black');
                $('.george-social').addClass('black');

                $( "#george-cv-offRecord" ).animate({
                    opacity: 0,
                    left: "-=10%"
                    }, 500, function() {
                        $( "#george-cv-onRecord" ).css("display", "block");
                        $( "#george-cv-offRecord" ).css("display", "none");
                        $( "#george-cv-onRecord" ).animate({
                           opacity: 1, 
                           left: "+=0"
                        }, 500);
                });

            } else {
                $('#george-cv-label').html('Off-Record');
                $('#george').removeClass('black');
                $('.george-social').removeClass('black');

                $( "#george-cv-onRecord" ).animate({
                    opacity: 0,
                    left: "0%"
                    }, 500, function() {
                        $( "#george-cv-offRecord" ).css("display", "block");
                        $( "#george-cv-onRecord" ).css("display", "none");
                        $( "#george-cv-offRecord" ).animate({
                           opacity: 1, 
                           left: "+=10%"
                        }, 500);
                });
            }
        }
    });

});