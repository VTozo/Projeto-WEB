//criação código Js
// para novos e-mail -> xml -> 
//sendo enviado para a o local dos enviados  (?)

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
			copia: $("#copia").val(),
			assunto: $("#assunto").val(),
			conteudo: $("#conteudo").val()
		},
		success: function(envioEmail){
			alert("Email enviado!");
		},
		error: function(){
			alert("Ocorreu um erro");
		}
	});

}