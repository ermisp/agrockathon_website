$( document ).ready(function() {
    $('#list-subscribe').click(function() {
    	if (!$('#list-subscribe').hasClass('disabled'))
    		listSubscribe();
    });

    $('.input-text').click(function(){
    	$("#list-subscribe").html('<i class="fa fa-times"></i>');
    });

    $('.input-text').keyup(function(){
    	var email = $('.input-text').val();

    	if (isValidEmailAddress(email)) {
    		$("#list-subscribe").html('<i class="fa fa-check"></i>');
    		$("#list-subscribe").removeClass('disabled');
    	}
    })
});

function listSubscribe() {
	$.ajax({
        url: '/server/new-subscriber.php',
        type: 'POST',
        dataType: "json",
        timeout: 10000,
        data: {
            email: "g_koul@hotmail.com"
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
    		$("#email-waiting").animate({
				opacity: 0,
				"padding-left": "50rem",
			},500, "linear", function() {
				$("#email-waiting").css('display', 'none');
				$("#email-failure").css('display', 'block');
				$("#email-failure").animate({
					opacity: 1,
					'padding-top': "3rem",
				});
			});   
    	},
    	complete: function() {
    		$("#email-waiting").hide(300);
    	}
    });
}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};