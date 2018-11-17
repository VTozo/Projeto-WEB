<?php
$id = uniqid();
// Gera um id único pro email, para dar pra excluir e para guardar em arquivos diferentes

session_start();

$remetente    = $_SESSION["email"];
$destinatario = $_POST["destinatario"];
$assunto      = $_POST["assunto"];
$conteudo     = $_POST["conteudo"];

$xml = new DOMDocument("1.0");

$tag_email_enviado = $xml->createElement("email");
$tag_destinatario  = $xml->createElement("destinatario", $destinatario);
$tag_remetente     = $xml->createElement("remetente"   , $remetente);
$tag_assunto       = $xml->createElement("assunto"     , $assunto);
$tag_conteudo      = $xml->createElement("conteudo"    , $conteudo);
$tag_id            = $xml->createElement("id"          , $id);

$tag_email_enviado->appendChild($tag_conteudo);
$tag_email_enviado->appendChild($tag_id);
$tag_email_enviado->appendChild($tag_assunto);
$tag_email_enviado->appendChild($tag_destinatario);
$tag_email_enviado->appendChild($tag_remetente);

$xml->appendChild($tag_email_enviado);

$xml->save("../arquivos/emails/email_" . $id . ".xml");
?>