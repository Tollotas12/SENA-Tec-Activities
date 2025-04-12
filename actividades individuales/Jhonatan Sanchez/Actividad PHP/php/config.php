<?php 
// Configuración de conexión a la base de datos 
$servername = "localhost";   // Servidor de la base de datos 
$username = "root";          
// Usuario de MySQL 
$password = "";              
// Contraseña del usuario 
$dbname = "chroripan";         
// Nombre de la base de datos 
// Creación de la conexión usando MySQLi (objeto-oriented) 
$conn = new mysqli($servername, $username, $password, $dbname); 
// Verificación de la conexión 
if ($conn->connect_error) { 
die("Conexión fallida: " . $conn->connect_error); // Termina la ejecución si hay error 
} 
?> 