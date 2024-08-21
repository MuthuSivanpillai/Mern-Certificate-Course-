<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['username']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    // Example: Save to a database (simplified, no real database connection)
    // In a real application, you'd hash the password and save it to a database
    // $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    echo "User registered successfully! Welcome, $username.";
}
?>
