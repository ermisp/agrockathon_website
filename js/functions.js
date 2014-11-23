$( document ).ready(function() {
    $('#list-subscribe').click(function() {
    	listSubscribe();
    })
});

function listSubscribe() {
	$.ajax({
        url: '/server/new-subscriber.php',
        type: 'POST',
        dataType: "json",
        data: {
            email: "g_koul@hotmail.com"
        },
        success: function(data){
            console.log(data);
    	}
    });
}