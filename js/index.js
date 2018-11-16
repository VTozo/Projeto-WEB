// Esse arquivo vai ser para enviar por Ajax
// o login e senha que o usuário digitar
// e receber se o login foi efetuado com 
// sucesso, e redirecionar o usuário pra 
// caixa de entrada (paginas/inbox.html)

$(document).ready(function(){

	$("#entrar").click(function(){
		criar_email();
	});

});

function criar_email(){
	
	$.ajax({
		type: "POST",
		url: "php/fazer_login.php",
		data:{
			email: $("#email").val(),
			senha: $("#senha").val(),
		},
		success: function(envioEmail){
			alert("Login realizado");
			
		},
		error: function(){
			alert("Não foi possível fazer login");
		}
	});

}