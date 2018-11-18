$(document).ready(function () {

    verificar_sessao()
    listar_emails();

    // Visualização de email
    $("#mails").on('click', '.mail', function () {
        $("#mails").hide();
        $("#mail .assunto")  .html($(this).children(".assunto")  .html());
        $("#mail .remetente").html($(this).children(".remetente").html());
        $("#mail .conteudo") .html($(this).children(".conteudo") .html());
        $("#mail").show();
    });

    $("#voltar_mails").click(function () {
        $("#mail") .hide();
        $("#mails").show();
    });

    $("#nav_mensagem").click(function () {
        if (!$(this).hasClass("ativo")) {
            $("section")       .hide();
            $(".nav_item")     .removeClass("ativo");
            $("#nav_mensagem") .addClass("ativo");
            $("#nova_mensagem").show();
        }
    });

    $("#nav_mails").click(function () {

        listar_emails();

        if (!$(this).hasClass("ativo")) {
            $("section")   .hide();
            $(".nav_item") .removeClass("ativo");
            $("#nav_mails").addClass("ativo");
            $("#mails")    .show();
        }
    });
    // Barra de pesquisa
    $("input[type=search]").on("change paste keyup", function () {
        $('.mail:contains("'      + $(this).val() + '")') .show();
        $('.mail:not(:contains("' + $(this).val() + '"))').hide();
    });

});

function listar_emails() {
    $.ajax({
        url: "../php/listar_mensagens.php",
        dataType: "json",
        success: function (result) {
            $("#mails").html("");
            for (var i = result.length - 1; i >= 0; i--) {
                $("#mails").append(
                    '<div class="mail">' +
                    '<div class="remetente">' + result[i].remetente + '</div>' +
                    '<div class="assunto">'   + result[i].assunto   + '</div>' +
                    '<div class="conteudo">'  + result[i].conteudo  + '</div>' +
                    '</div>'
                );
            }
        }
    });
}

//function listar_email_enviados(){
//	$.ajax({
//		url:"../php/listar_enviados.php",
//        dataType "json",
//        sucess: function (enviados) {
//           }
//    });
//}

function verificar_sessao() {
    $.ajax({
        url: "../php/verificar_sessao.php",
        success: function (sessao_ativa) {
            if (!sessao_ativa) {
                window.location.pathname = 'Projeto-WEB/index.html';
            }
        },
        error: function () {
            alert("Algum erro ocorreu. Não foi possível verificar a sessão.");
        }
    });
}