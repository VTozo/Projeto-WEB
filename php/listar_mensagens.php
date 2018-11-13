<?php

	$caminho = "../arquivos/emails/";
	$diretorio = dir($caminho);

	while($arquivo = $diretorio->read()){
		
		if($arquivo != '.' && $arquivo != '..'){
			echo '<div class="mail">';
			$xml_string = file_get_contents($caminho.$arquivo);
			$xml_object = simplexml_load_string($xml_string);

			echo '<div class="remetente">'.$xml_object->remetente.'</div>';
			echo '<div class="assunto">'.$xml_object->assunto.'</div>';
			echo '<div class="conteudo">'.$xml_object->conteudo.'</div>';

			echo "</div>";
		}
		
	}
	$diretorio->close();
?>