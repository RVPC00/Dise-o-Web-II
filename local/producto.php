<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tienda";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$method = $_SERVER['REQUEST_METHOD'];
$path = isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO']:'';
$request = explode('/', trim($path, '/'));

$id = isset($request[1]) ? (int)$request[1] : null;

switch ($method) {
    case 'GET':
        if ($id) {
            $sql = "SELECT * FROM producto WHERE codigo=$id";
        } else if (isset($_GET['query'])) {
            $query = $conn->real_escape_string($_GET['query']);
            $sql = "SELECT * FROM producto WHERE nombre LIKE '%$query%' OR cantidad LIKE '%$query%'";
        } else {
            $sql = "SELECT * FROM producto";
        }
        $result = $conn->query($sql);
        $producto = [];
        while ($row = $result->fetch_assoc()) {
            $producto[] = $row;
        }
        echo json_encode($producto);
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $nombre = $data['nombre'];
        $cantidad = $data['cantidad'];
        $estado = $data['estado'];

        $sql = "INSERT INTO producto (nombre, cantidad, estado) VALUES ('$nombre', '$cantidad', '$estado')";
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["message" => "Producto añadido"]);
        } else {
            echo json_encode(["message" => "Error: " . $conn->error]);
        }
        break;

    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        $id = $data['codigo'];
        $nombre = $data['nombre'];
        $cantidad = $data['cantidad'];
        $estado = $data['estado'];
        $sql = "UPDATE producto SET nombre='$nombre', cantidad='$cantidad', estado='$estado'  WHERE codigo='$id' ";
        if ($conn->query($sql) === TRUE)
        {
            echo json_encode(["message" => "Datos actualizados"]);
        }
        else {
               echo json_encode(["message" => "Error: " . $conn->error]);
        }
        break;

    case 'DELETE':
         $id = $_GET['codigo'];
         $stmt = $pdo->prepare("DELETE FROM producto WHERE id=?");
         $stmt->execute([$id]);
         echo json_encode(["message" => "Producto eliminado"]);
         break;
       
}
 $conn->close();
?>

