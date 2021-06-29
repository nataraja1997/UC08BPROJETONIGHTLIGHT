<?php

$hostname = "localhost";
$user = "root";
$password = "";
$database = "cadastro";
$conexao = mysql_connect($hostname,$user,$password,$database);

if(!$conexao){
    print "falha na conexão com o Banco de Dados";
}

?>