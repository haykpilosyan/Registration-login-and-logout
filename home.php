<?php
    session_start();
?>
<html>
    <head>
        <title>Home Page</title>
    </head>
    <body>
        Hello <?php echo $_SESSION['username']; ?>! <a href="logout.php">Logout</a>
    </body>
</html>
