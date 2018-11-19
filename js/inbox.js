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

    $("#nav_excluidos").click(function () {
        $("section") .hide();
        $(".nav_item")     .removeClass("ativo");
        $("#nav_excluidos") .addClass("ativo");
        $("#excluidos").show();
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

    // Exclusão de email
    $("#mails").on('click', '.excluir', function (e) {
        excluir_email($(this).val());
        e.stopPropagation();
    });

    // Restauração de email
    $("#excluidos").on('click', '.restaurar', function (e) {
        restaurar_email($(this).val());
        e.stopPropagation();
    });

    //email - enviados:
    $("#nav_envios").click(function () {

        listar_email_enviados();

        if (!$(this).hasClass("ativo")) {
            $("section").hide();
            $(".nav_item").removeClass("ativo");
            $("#nav_envios").addClass("ativo");
            $("#mails_envi").show();
        }
    });

    $("#mails_envi").on('click', '.mail', function () {
        $("#mails_envi").hide();
        $("#mail_envi .assunto"  ).html($(this).children(".assunto")  .html());
        $("#mail_envi .destinatario").html($(this).children(".destinatario").html());
        $("#mail_envi .conteudo" ).html($(this).children(".conteudo") .html());
        $("#mail_envi").show();
    });

    $("#voltar_mails_envi").click(function () {
        $("#mail_envi").hide();
        $("#mails_envi").show();
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
                    '<button class="excluir" title="Excluir" value="'+result[i].id+'"></button>' +
                    '</div>'
                );
            }
        }
    });

    $.ajax({
        url: "../php/listar_excluidos.php",
        dataType: "json",
        success: function (result) {
            $("#excluidos").html("");
            for (var i = result.length - 1; i >= 0; i--) {
                $("#excluidos").append(
                    '<div class="mail">' +
                    '<div class="remetente">' + result[i].remetente + '</div>' +
                    '<div class="assunto">'   + result[i].assunto   + '</div>' +
                    '<div class="conteudo">'  + result[i].conteudo  + '</div>' +
                    '<button class="restaurar" title="Restaurar" value="'+result[i].id+'"></button>' +
                    '</div>'
                );
            }
        }
    });
}

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

function excluir_email(id) {
    $.ajax({
        url: "../php/excluir_email.php",
        type: "POST",
        data: {
            id: id
        },
        success: function (result) {
            listar_emails();
        }
    });
}

function listar_email_enviados(){
    $.ajax({
        url: "../php/listar_enviados.php",
        dataType: "json",
        success: function (result) {
            $("#mails_envi").html("");
            for (var i = result.length - 1; i >= 0; i--) {
                $("#mails_envi").append(
                    '<div class="mail">' +
                    '<div class="destinatario">' + result[i].destinatario + '</div>' +
                    '<div class="assunto">'   + result[i].assunto   + '</div>' +
                    '<div class="conteudo">'  + result[i].conteudo  + '</div>' +
                    '</div>'
                );
            }
        }
    });
}

function restaurar_email(id) {
    $.ajax({
        url: "../php/restaurar_email.php",
        type: "POST",
        data: {
            id: id
        },
        success: function (result) {
            listar_emails();
        }
    });
}