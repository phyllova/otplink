<?php
session_start();
if (!isset($_SESSION['otp'])) {
    header('Location: index.php'); // Redirect if session does not have OTP
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify OTP</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Verify OTP</h2>
        <p>Please enter the OTP: <strong><?php echo $_SESSION['otp']; ?></strong></p> <!-- Show the OTP for demo purposes -->
        <form action="process_otp.php" method="POST">
            <input type="text" name="otp" placeholder="Enter your OTP" required>
            <button type="submit">Verify</button>
        </form>
        
        <?php
        if (isset($_SESSION['otp_error'])) {
            echo "<p style='color:red;'>".$_SESSION['otp_error']."</p>";
            unset($_SESSION['otp_error']);
        }
        ?>
    </div>
</body>
</html>
