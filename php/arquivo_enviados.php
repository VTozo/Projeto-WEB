<?php

	$id = uniqid();
	// Gera um id único pro email, para dar pra excluir e para guardar em arquivos diferentes

	$destinatario = $_email["destinatario"];
	$copia = $_email["copia"];
	$assunto = $_email["assunto"];
	$conteudo= $_email["conteudo"];


	$xml = new DOMDocument("1.0");
	$tag_emailEnviado = $xml->createElement("emailEnviado");
	$tag_destinatario = $xml->createElement("destinatario", $destinatario);
	$tag_copia = $xml->createElement("copia", $copia);
	$tag_resumo = $xml->createElement("assunto", $assunto);
	$tag_conteudo = $xml->createElement("conteudo", $conteudo);
	$tag_id = $xml->createElement("id", $id);

	$tag_emailEnviado->appendChild($tag_conteudo);
	$tag_emailEnviado->appendChild($tag_id);
	$tag_emailEnviado->appendChild($tag_assunto);
	$tag_emailEnviado->appendChild($tag_copia);
	$tag_emailEnviado->appendChild($tag_destinatario);
	$xml->appendChild($tag_emailEnviado);

	$xml->save("../arquivos/emailEnviados/mail_".$id.".xml");

	echo "email enviado"

?>