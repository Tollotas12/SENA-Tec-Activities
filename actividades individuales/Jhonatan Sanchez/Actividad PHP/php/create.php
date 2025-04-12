<?php 
include 'config.php';

if (isset($_POST['nombre']) && isset($_POST['email'])) {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    
    $sql = "INSERT INTO usuarios (nombre, email) VALUES ('$nombre', '$email')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Registro creado";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
<?php 
include 'config.php'; // Incluye la configuración de conexión a la BD

// Consulta SQL para obtener todos los usuarios 
$sql = "SELECT * FROM usuarios"; // Selecciona todos los registros de la tabla 'usuarios'
$result = $conn->query($sql); // Ejecuta la consulta 
$data = array(); // Inicializa array para almacenar resultados 
// Verifica si hay registros obtenidos 
if ($result->num_rows > 0) { 
// Recorre cada fila de resultados 
while ($row = $result->fetch_assoc()) { 
$data[] = $row; // Agrega cada registro al array 
} 
} 
echo json_encode($data); // Convierte el array a formato JSON 
?> 

