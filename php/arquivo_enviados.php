<?php

	$destinatario = $_email["destinatario"];
	$copia = $_email["copia"];
	$resumo = $_email["resumo"];
	$conteudo= $_email["conteudo"];


	$xml = new DOMDocument("1.0");
	$tag_emailEnviado = $xml->createElement("emailEnviado");
	$tag_destinatario = $xml->createElement("destinatario", $destinatario);
	$tag_copia = $xml->createElement("copia", $copia);
	$tag_resumo = $xml->createElement("resumo", $resumo);
	$tag_conteudo = $xml->createElement("conteudo", $conteudo);

	$tag_emailEnviado->appendChild($tag_conteudo);
	$tag_emailEnviado->appendChild($tag_resumo);
	$tag_emailEnviado->appendChild($tag_copia);
	$tag_emailEnviado->appendChild($tag_destinatario);
	$xml->appendChild($tag_emailEnviado);

	$xml->save("../arquivos/emailEnviados/enviados.xml");

	echo "email enviado"

?>