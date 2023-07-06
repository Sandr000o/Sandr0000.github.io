<?php
$con=mysqli_connect("localhost", "root", "", "registro") or die ("Error en la conexion");
 $sql= "INSERT INTO users VALUES(null, '".$_POST["nombre"]."', '".$_POST["email"]."', '".$_POST["password"]."')";
 $resultado=mysqli_query($con, $sql) or die ('Error en el query database');
 mysqli_close($con);

 /*
 echo 'El producto ingresado es: '."<br>". $_POST["producto"]."<br>". $_POST["cantidad"]."<br>". $_POST["marca"];
 */


?>