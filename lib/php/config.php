<?php
$bd_host = "localhost"; 
$bd_usuario = "nuostudi_jaicab"; 
$bd_password = "J4¡m€caballero"; 
$bd_base = "nuostudi_ciego"; 
$con = mysqli_connect($bd_host, $bd_usuario, $bd_password);
mysqli_select_db($con,$bd_base);
date_default_timezone_set("Europe/Madrid");