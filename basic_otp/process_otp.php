<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $input_otp = $_POST['otp'];

    // Check if the entered OTP matches the session OTP
    if ($input_otp == $_SESSION['otp']) {
        // OTP is valid, proceed to welcome page
        unset($_SESSION['otp']); // Clear OTP from session
        header('Location: welcome.php');
        exit();
    } else {
        $_SESSION['otp_error'] = "Invalid OTP. Please try again.";
        header('Location: verify_otp.php');
        exit();
    }
}
?>
