<?php
session_start();
$server = "localhost";
$username = "root";
$password = "";
$db = "reg";


$conn = mysqli_connect($server, $username, $password);

mysqli_select_db($conn, $db);

$username = $_POST['user'];
$email = $_POST['email'];
$password2 = $_POST['password'];

$s = "select * from users where name = '$username' && password = '$password2'";

$result = mysqli_query($conn, $s);

$num = mysqli_num_rows($result);

if($num == 1)
{
    header('location:home.php');

    $_SESSION['username'] = $username;
}
else {
    header('location:login.php');
}
?>