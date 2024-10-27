<?php
session_start();
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $password);

    if ($stmt->execute()) {
        $_SESSION['success'] = "Registration successful! You can now log in.";
        header('Location: index.php');
    } else {
        $_SESSION['error'] = "Email already exists.";
        header('Location: index.php');
    }

    $stmt->close();
}
$conn->close();
?>
