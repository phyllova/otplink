<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: index.php'); // Redirect if user is not logged in
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to the Gmail Clone!</h1>
        <p>You are successfully logged in.</p>
        <a href="logout.php">Logout</a>
    </div>
</body>
</html>
