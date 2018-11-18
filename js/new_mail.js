$(document).ready(function () {

    $("#enviar_arquivo").click(function () {
        criar_email();
    })

});

function criar_email() {
    $.ajax({
        type: "POST",
        url: "../php/enviar_email.php",
        data: {
            destinatario: $("#destinatario").val(),
            assunto:      $("#assunto").val(),
            conteudo:     $("#conteudo").val()
        },
        success: function () {
            alert("Email enviado!");
            $("#destinatario, #assunto, #conteudo").val("");
        },
        error: function () {
            alert("Ocorreu um erro");
        }
    });
}