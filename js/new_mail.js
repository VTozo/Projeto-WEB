
$(document).ready(function(){

	$("#enviar_arquivo").click(function(){
		criar_email();
	})

});


function criar_email(){
	
	$.ajax({
		type: "POST",
		url: "../php/enviar_email.php",
		data:{
			destinatario: $("#destinatario").val(),
			assunto: $("#assunto").val(),
		},
		success: function(envioEmail){
			alert("Email enviado!");
		},
		error: function(){
			alert("Ocorreu um erro");
		}
	});

}