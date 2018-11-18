<?php
//emails
$emails = "../arquivos/emails/";
$diretorio = dir($emails);
$array = array();

//seleciona cada xml
while($file=$diretorio->read()){
	if ($file !="." && $file!=".."{

	$xml_string = file_get_contents($emails . $file);//carrega xml
	$xml_object = simplexml_load_string($xml_string);


		if ((string)$xml_object->remetente == $_SESSION["email"]){//compara remetente com usuario
			$array = array(
			'id'        => (string)$xml_object->id,
  			'conteudo'  => (string)$xml_object->conteudo,
      		'assunto'   => (string)$xml_object->assunto,
			'remetente' => (string)$xml_object->remetente//add no aray
      		);							
		}
	}
}
	$diretorio->close();

	$json = json_encode($array);
	echo $json;
?>