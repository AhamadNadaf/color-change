<?php
$host = "localhost";
$username = "color_change";
$password = "colorchange123";
$database = "color_app";

$mysqli = new mysqli($host, $username, $password, $database);

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}
?>
