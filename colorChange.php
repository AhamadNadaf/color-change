<?php
include 'db_config.php';

$data = json_decode(file_get_contents('php://input'));

if ($data) {
    $selectedColor = $data->color;
    $username = $data->name; 

    $stmt = $mysqli->prepare("INSERT INTO user_colors (username, selected_color) VALUES ($username, $selectedColor )");
    $stmt->bind_param($username, $selectedColor);

    if ($stmt->execute()) {
        echo "Color changed and saved to the database.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$mysqli->close();
?>
