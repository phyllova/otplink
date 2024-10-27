<?php
session_start();
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            // Set a predetermined OTP value (for demo purposes)
            $_SESSION['otp'] = '123456'; // Example OTP
            $_SESSION['user_id'] = $user['id'];

            // Redirect to OTP verification page
            header('Location: verify_otp.php');
            exit();
        } else {
            $_SESSION['error'] = "Invalid password.";
            header('Location: index.php');
        }
    } else {
        $_SESSION['error'] = "No user found with that email.";
        header('Location: index.php');
    }

    $stmt->close();
}
$conn->close();
?>
