<?php
//emails
$emails = file_get_contents("../arquivos/emails/");
$diretorio = dir($emails);
$array = array();

//usuarios:
//ver xml dos usuarios


	while($file=$diretorio ->read()){
		if ($file !="." && $file!=".."){//add id de usuario via xml
			$xml_string = file_get_contents($emails.$file);
			$xml_object = simplexml_load_string($xml_string);


			$array = array(
				'id'        => (string)$xml_object->id,
          		'conteudo'  => (string)$xml_object->conteudo,
            	'assunto'   => (string)$xml_object->assunto,
				'remetente' => (string)$xml_object->remetente
        	);							
		}
	}
	$diretorio->close();

	$json = json_encode($array);
	echo $json;
?>