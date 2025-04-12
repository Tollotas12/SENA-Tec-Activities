<?php
include 'config.php';  // Conexión a la BD

$sql = "SELECT * FROM usuarios";  // Consulta SQL
$result = $conn->query($sql);     // Ejecuta la consulta
$data = array();                  // Array para los resultados

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;  // Agrega cada fila al array
    }
}

echo json_encode($data);  // Devuelve los datos en JSON
?>