<?php 
include 'config.php'; // Incluye el archivo con la configuración de conexión a la BD 
 
// Verifica si se recibió el parámetro 'id' por POST 
if (isset($_POST['id'])) { 
     
    // Captura el ID del registro a eliminar 
    $id = $_POST['id']; 
     
    // Construye la consulta SQL de eliminación 
    $sql = "DELETE FROM usuarios WHERE id='$id'"; 
     
    // Ejecuta la consulta y maneja el resultado 
    if ($conn->query($sql) === TRUE) { 
        echo "Registro eliminado"; // Confirmación de éxito 
    } else { 
        echo "Error: " . $conn->error; // Mensaje de error de MySQL 
    } 
} 
?> 