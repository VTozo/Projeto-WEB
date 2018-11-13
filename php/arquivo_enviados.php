<?php

 	if(isset($_POST)) echo "post";;
	//$destinatario = $_POST["destinatario"];
	//$copia = $_POST["copia"];
	//$assunto = $_POST["assunto"];
	//$conteudo= $_POST["conteudo"];



	$id = uniqid();
	// Gera um id único pro email, para dar pra excluir e para guardar em arquivos diferentes

	$destinatario = "destinatario1";
	$copia = "copia1";
	$assunto = "assunto1";
	$conteudo = "conteudo1";

	$xml = new DOMDocument("1.0");
	$tag_emailEnviado = $xml->createElement("email");
	$tag_destinatario = $xml->createElement("destinatario", $destinatario);
	$tag_copia = $xml->createElement("copia", $copia);
	$tag_assunto = $xml->createElement("assunto", $assunto);
	$tag_conteudo = $xml->createElement("conteudo", $conteudo);
	$tag_id = $xml->createElement("id", $id);

	$tag_emailEnviado->appendChild($tag_conteudo);
	$tag_emailEnviado->appendChild($tag_id);
	$tag_emailEnviado->appendChild($tag_assunto);
	$tag_emailEnviado->appendChild($tag_copia);
	$tag_emailEnviado->appendChild($tag_destinatario);
	$xml->appendChild($tag_emailEnviado);

	$xml->save("../arquivos/emails/email_".$id.".xml");

	echo "email enviado"

?>