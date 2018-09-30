<?php
    session_start();

    $server = "localhost";
    $username = "root";
    $password = "";
    $db = "db";


    $conn = mysqli_connect($server, $username, $password);

    mysqli_select_db($conn, $db);

    $username = $_POST['user'];
    $email = $_POST['email'];
    $password2 = $_POST['password'];
    $s = "select * from users where name = '$username'";

    $result = mysqli_query($conn, $s);

    $num = mysqli_num_rows($result);


    $link = "";
    if($num == 1)
    {
        echo "Usename Already Taken";
    }
    else{
        $reg = "insert into users(name, email, password) VALUES ('$username', '$email', '$password2')";
        mysqli_query($conn, $reg);
        $registration = "Registration";
        echo $registration . "<a href='login.php'>Login</a>";
    }
?>