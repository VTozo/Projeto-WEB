//criação código Js
// para novos e-mail -> xml -> 
//sendo enviado para a o local dos enviados  (?)

$(document).ready(function(){

	$("#enviar_arquivo").click(function(){
		fCriar_email();
		alert(0);
		// return false;
	})
});


function fCriar_email(){
	alert()
	$.ajax({
		type: "POST",
		url: "../php/enviar_email.php",
		data:{
			destinatario: $("#destinatario").val(),
			copia: $("#copia").val(),
			assunto: $("#assunto").val(),
			conteudo: $("#conteudo").val()
		},
		success: function(envioEmail){
			alert(envioEmail);
			alert(2);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert(xhr);
			alert(ajaxOptions);
			alert(thrownError);
		}
	});

}