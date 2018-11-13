//criação código Js
// para novos e-mail -> xml -> 
//sendo enviado para a o local dos enviados  (?)

$(document).ready(function(){

	$("#bEnviar_arquivo").click(function(){
		fCriar_email();
		return false;
	})
});


function fCriar_email(){
alert();
$.ajax({
	type: "POST",
	dataType: "text",
	url: "../php/arquivos_enviados.php",
	data:{
		destinatario: $("#destinatario").val(),
		copia: $("#copia").val(),
		assunto: $("#assunto").val(),
		conteudo: $("#conteudo").val()
	}
	sucess: function(envioEmail){
		alert(envioEmail);
	}
});

}