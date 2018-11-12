
$(document).ready(function(){
	// Listagem de emails
	$.ajax({
		url: "../php/listar_mensagens.php",
		async: false,
		success: function(result){
        	$("#mails").html(result);
    	}
	});
	

	// Visualização de email
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

	// Barra de pesquisa
	$("input[type=search]").on("change paste keyup", function() {
		$('.mail:contains("'+$(this).val()+'")').show();
		$('.mail:not(:contains("'+$(this).val()+'"))').hide();
	});

});