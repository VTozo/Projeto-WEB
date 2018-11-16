<?php
	$email = $_POST["email"];
	$senha = $_POST["senha"];

	$login_aprovado = FALSE;

	$xml = simplexml_load_file("arquivos/usuarios/usuarios.xml");

	// foreach ($xml as $usuario){
	// 	if ($usuario->email[0] == $email and $usuario->senha[0] == $senha) $login_aprovado = TRUE;
	// }

	// if !$login_aprovado throw new Exception("Error Processing Request", 1);
	
	
?>