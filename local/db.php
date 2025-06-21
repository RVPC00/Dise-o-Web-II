<?php
$host = 'localhost';
$db   = 'tienda';
$user = 'root';      // Cambiar si es necesario
$pass = '';          // Cambiar si es necesario

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
    exit();
}
?>
