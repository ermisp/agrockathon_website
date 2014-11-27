define(function (require) {

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Foundation          = require('foundation'),
        tpl                 = require('text!app/views/participate/participate-page2.html'),

        template = _.template(tpl);

    return Backbone.View.extend({

        events: {
            "click #list-subscribe": "subscribeToList",
            "click .input-text": "checkEmailAddress",
            "keyup .input-text": "checkEmailAddress"
        },

        render: function () {
            this.$el.append(template());
            return this;
        },

        subscribeToList: function() {
            if ($('#list-subscribe').hasClass('disabled'))
                return;

            $.ajax({
                url: '/server/new-email-subscriber.php',
                type: 'POST',
                dataType: "json",
                timeout: 10000,
                data: {
                    email: $('.input-text').val(),
                },
                beforeSend: function() {  
                    $("#email-input").animate({
                        opacity: 0,
                        'padding-top': "4rem",
                    }, 800, function() {
                        $("#email-input").css('display', 'none');
                        $("#email-waiting").css('display', 'block');
                        $("#email-waiting").animate({
                            opacity: 1,
                            "padding-left": "30rem",
                        },1000, "linear")
                    });
                },
                success: function(data){
                    $("#email-waiting").animate({
                        opacity: 0,
                        "padding-left": "50rem",
                    },500, "linear", function() {
                        $("#email-waiting").css('display', 'none');
                        $("#email-success").css('display', 'block');
                        $("#email-success").animate({
                            opacity: 1,
                            'padding-top': "3rem",
                        });
                    });   
                },
                error: function() {        
                    $("#email-waiting").stop();
                    $("#email-waiting").hide(300);       
                    $("#email-failure").css('display', 'block');
                    $("#email-failure").animate({
                        opacity: 1,
                        'padding-top': "3rem",
                    });  
                },
                complete: function() {
                    $("#email-waiting").hide(300);
                }
            });
        },

        checkEmailAddress: function(){
            var email = $('.input-text').val();
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);

            if (pattern.test(email)) {
                $("#list-subscribe").html('<i class="fa fa-check"></i>');
                $("#list-subscribe").removeClass('disabled');
                $("#list-subscribe").css("opacity", 1);
            } else {
                $("#list-subscribe").html('<i class="fa fa-times"></i>');
                $("#list-subscribe").addClass('disabled');
                $("#list-subscribe").css("opacity", 0.6);
            }
        }

    });

});