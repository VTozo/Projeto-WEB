<?php
	$email = $_POST["email"];
	$senha = $_POST["senha"];

	$login_aprovado = FALSE;

	$xml = simplexml_load_file("arquivos/usuarios/usuarios.xml");

	foreach ($xml->usuario as $usuario){
	 	if ($usuario->email == $email and $usuario->senha == $senha) $login_aprovado = TRUE;
	}

	if ($login_aprovado) {
		echo "1";
		session_start();
		$_SESSION["email"] = $email;
	} else {
		echo "0";
	}
	
	
?>
