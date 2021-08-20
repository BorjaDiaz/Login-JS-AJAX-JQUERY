 jQuery(document).ready(function($) {
    $("#signup-form").submit(function(event) {
            event.preventDefault();
            searchAjax();

        });
});

function searchAjax() {
        var data = {
			nombre : $( "#nombre" ).val(),
			nombreUsuario: $( "#nombreUsuario" ).val(),
			email: $( "#email" ).val(),
			password: $( "#password" ).val(),
			roles: [$( "#rol" ).val()]
		};
		
        $.ajax({
            type : "POST",
            url : "http://localhost:8080/auth/signup",
            data : JSON.stringify(data),
			dataType: "json",
			contentType: "application/json; charset=utf-8",
            timeout : 100000,
            success : function(data) {
                console.log("SUCCESS: ", data);
            },
            error : function(e) {
                console.log("ERROR: ", e);
            },
            done : function(e) {
                console.log("DONE");
            }
        });
    }

    

    carousel.js (220,15)