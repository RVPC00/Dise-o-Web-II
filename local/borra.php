<?php
include 'db.php';
$codigo = $_GET['codigo'] ?? null;

if ($codigo <> '')
{
   
    $stmt = $pdo->prepare("DELETE FROM producto WHERE codigo=?");
    $stmt->execute([$codigo]);
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['error' => 'ID no proporcionado' . $codigo]);
}

?>
