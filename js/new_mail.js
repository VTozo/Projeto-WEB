//criação código Js
// para novos e-mail -> xml -> 
//sendo enviado para a o local dos enviados  (?)

$(document).ready(function(){

	$("bEnviar_arquivo").click(function(){
		fCriar_email();
		return false;
	})
});


function fCriar_email(){

$.ajax({
	type: "emial",
	dataType: "JSON",
	url: "..php/arquivos_enviados.php"
	async: false,
	data:{
		destinatario: $("#destinatario").val(),
		copia: $("#copia").val(),
		resumo: $("#resumo").val(),
		conteudo: $("#conteudo").val()
	}
	sucess: function(envioEmail){
	}
});

}