<?php
$login_aprovado = FALSE;

$email = $_POST["email"];
$senha = $_POST["senha"];

$xml = simplexml_load_file("../arquivos/usuarios/usuarios.xml");

foreach ($xml->usuario as $usuario) {
    if ($usuario->email == $email and $usuario->senha == $senha) $login_aprovado = TRUE;
}

if ($login_aprovado) {
    echo TRUE;
    session_start();
    $_SESSION["email"] = $email;
} else {
    echo FALSE;
}
?>