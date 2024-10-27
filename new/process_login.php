<?php
header('Content-Type: application/json');

$username = $_POST['username'];
$password = $_POST['password'];

// Sample check (replace with actual authentication logic)
if ($username === 'user' && $password === 'password') {
    // If authentication fails, you can return an error message.
    echo json_encode(['status' => 'otp_required', 'username' => $username]);
} else {
    echo json_encode(['status' => 'invalid_credentials']);
}
?>
