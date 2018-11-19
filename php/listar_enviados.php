<?php
//emails
$emails = "../arquivos/emails/";
$diretorio = dir($emails);
$array = array();
session_start();

//seleciona cada xml
while($file=$diretorio->read()){
	if ($file !="." && $file!=".."){

	$xml_object = simplexml_load_file($emails.$file);


		if ((string)$xml_object->remetente == $_SESSION["email"]){//compara remetente com usuario
			$array[] = array(
			'id'        => (string)$xml_object->id,
  			'conteudo'  => (string)$xml_object->conteudo,
      		'assunto'   => (string)$xml_object->assunto,
			'destinatario' => (string)$xml_object->destinatario//add no aray
      		);							
		}
	}
}
	$diretorio->close();

	$json = json_encode($array);
	echo $json;
?>