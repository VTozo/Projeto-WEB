<?php
$sessao_ativa = FALSE;
session_start();
if (isset($_SESSION["email"])) $sessao_ativa = TRUE;
echo $sessao_ativa;
?>