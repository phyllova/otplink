<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gmail Clone Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Gmail Clone</h2>
        
        <!-- Login Form -->
        <form action="login.php" method="POST">
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        
        <h4>Don't have an account?</h4>
        
        <!-- Registration Form -->
        <form action="register.php" method="POST">
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Register</button>
        </form>
        
        <?php
        if (isset($_SESSION['error'])) {
            echo "<p style='color:red;'>".$_SESSION['error']."</p>";
            unset($_SESSION['error']);
        }
        ?>
    </div>
</body>
</html>
