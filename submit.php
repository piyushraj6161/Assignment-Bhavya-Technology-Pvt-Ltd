<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Student_Database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind the SQL statement
$stmt = $conn->prepare("INSERT INTO students (student_name, subject1, subject2, subject3, subject4, subject5) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $student_name, $subject1, $subject2, $subject3, $subject4, $subject5);

// Set parameters and execute
$student_name = $_POST["studentName"];
$subject1 = $_POST["subject1"];
$subject2 = $_POST["subject2"];
$subject3 = $_POST["subject3"];
$subject4 = $_POST["subject4"];
$subject5 = $_POST["subject5"];
$stmt->execute();
$stmt->close();
$conn->close();
?>
