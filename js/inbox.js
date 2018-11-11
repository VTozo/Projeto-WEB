// Esse arquivo vai ser pra receber os emails
// por Ajax e listar na página de emails,
// dentro da div id='mails' no formato:
//
// <div class="mail">
// 	   <div class="remetente"></div>
// 	   <div class="assunto"></div>
//     <div class="conteudo"></div>
// </div>

$(document).ready(function(){

	$(".mail").click(function(){
		$("#mails").fadeOut();
		$("#mail .assunto").html($(this).children(".assunto").html());
		$("#mail .remetente").html($(this).children(".remetente").html());
		$("#mail .conteudo").html($(this).children(".conteudo").html());
		$("#mail").fadeIn();
	});

	$("#voltar_mails").click(function(){
		$("#mail").fadeOut();
		$("#mails").fadeIn();
	});

	$("input[type=search]").on("change paste keyup", function() {
		$('.mail:contains("'+$(this).val()+'")').show();
		$('.mail:not(:contains("'+$(this).val()+'"))').hide();
	});

});