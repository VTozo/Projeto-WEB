$(document).ready(function () {

    verificar_sessao();

    $("#entrar").click(function () {
        criar_email();
    });

});

function criar_email() {
    $.ajax({
        type: "POST",
        url: "php/fazer_login.php",
        data: {
            email: $("#email").val(),
            senha: $("#senha").val(),
        },
        success: function (login_aprovado) {
            if (login_aprovado) {
                window.location.pathname = 'Projeto-WEB/paginas/inbox.html';
            } else {
                alert('Email ou senha incorretos.');
            }
        },
        error: function () {
            alert("Algum erro ocorreu. Não foi possível realizar login.");
        }
    });
}

function verificar_sessao() {
    $.ajax({
        url: "php/verificar_sessao.php",
        success: function (sessao_inativa) {
            if (!sessao_inativa) {
                window.location.pathname = 'Projeto-WEB/paginas/inbox.html';
            }
        },
        error: function () {
            alert("Algum erro ocorreu. Não foi possível verificar a sessão.");
        }
    });
}