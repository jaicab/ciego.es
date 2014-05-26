<?php
$bd_host = "localhost";
$bd_usuario = "root";
$bd_password = "petergriffin";
$bd_base = "ciego";
$con = mysqli_connect($bd_host, $bd_usuario, $bd_password);
mysqli_select_db($con,$bd_base);
date_default_timezone_set("Europe/Madrid");