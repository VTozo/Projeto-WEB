<?php
session_start();

$sessao_ativa = FALSE;
if (isset($_SESSION["email"])) $sessao_ativa = TRUE;

echo $sessao_ativa;
?>