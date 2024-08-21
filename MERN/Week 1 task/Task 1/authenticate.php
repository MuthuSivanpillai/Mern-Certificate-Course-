<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    // Example: Hardcoded credentials check (replace with a database check in real-world usage)
    if ($username == "admin" && $password == "123456") {
        console.log("Login successful! Welcome, $username.");
    } else {
        console.log("Invalid username or password.");
    }
}
?>
