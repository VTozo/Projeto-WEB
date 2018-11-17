<?php
	$caminho = "../arquivos/emails/";
	$diretorio = dir($caminho);
	$array = array();

	while($arquivo = $diretorio->read()){
		
		if($arquivo != '.' && $arquivo != '..'){

			$xml_string = file_get_contents($caminho.$arquivo);
			$xml_object = simplexml_load_string($xml_string);


			$array[] = array(
				'id' => (string)$xml_object->id, 
				'conteudo' => (string)$xml_object->conteudo, 
				'assunto' => (string)$xml_object->assunto, 
				'remetente' => (string)$xml_object->remetente
			);
		}
		
	}
	$diretorio->close();

	$json = json_encode($array);
	echo $json;
?>