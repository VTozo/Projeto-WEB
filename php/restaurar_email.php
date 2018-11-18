<?php

$id = $_POST["id"];
@rename(
	"../arquivos/emails_excluidos/email_" . $id.".xml",
	"../arquivos/emails/email_" . $id.".xml"
);
?>