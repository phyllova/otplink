<?php
// Simulated OTP verification logic

// Simulated OTP (e.g., "123456")
$enteredOtp = $_POST['otp'];
$username = $_POST['username'];

if ($enteredOtp === '123456') {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'failed']);
}
?>
