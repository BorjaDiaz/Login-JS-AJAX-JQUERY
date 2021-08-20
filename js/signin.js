 jQuery(document).ready(function($) {
    $("#signin-form").submit(function(event) {
		event.preventDefault();
		searchAjax();

    });
});

function searchAjax() {
        var data = {
			nombreUsuario: $( "#nombreUsuario" ).val(),
			password: $( "#password" ).val(),
		};
        console.log(data);
        $.ajax({
            type : "POST",
            url : "http://localhost:8080/auth/signin",
            data : JSON.stringify(data),
			dataType: "json",
			contentType: "application/json; charset=utf-8",
            timeout : 100000,
            success : function(data) {
                console.log("SUCCESS: ", data);
				sessionStorage.setItem('token', JSON.stringify(data));
                
            },
            error : function(e) {
                console.log("ERROR: ", e);
            },
            done : function(e) {
                console.log("DONE");
            }
        });
    }

    

