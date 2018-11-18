<?php
session_start();
if ($_SESSION["email"]) echo TRUE;
else echo FALSE;
?>