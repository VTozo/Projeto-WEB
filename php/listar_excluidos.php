<?php
$caminho = "../arquivos/emails_excluidos/";
$diretorio = dir($caminho);
$array = array();
session_start();

while ($arquivo = $diretorio->read()) {
    if ($arquivo != '.' && $arquivo != '..') {
        $xml_string = file_get_contents($caminho . $arquivo);
        $xml_object = simplexml_load_string($xml_string);

        if ((string)$xml_object->destinatario == $_SESSION["email"]) {
            $array[] = array(
                'id'        => (string)$xml_object->id,
                'conteudo'  => (string)$xml_object->conteudo,
                'assunto'   => (string)$xml_object->assunto,
                'remetente' => (string)$xml_object->remetente
            );
        }
        
    }
}
$diretorio->close();

$json = json_encode($array);
echo $json;
?>