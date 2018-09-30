<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login, register, logout</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
    <div class="row">
        <div class="col-md-6">
            <h2>Login</h2>
            <form action="validation.php" method="post">
            <div class="form-group">
                <input type="text" name="user" class="form-control" required placeholder="Username">
            </div>
            <div class="form-group">
                <input type="text" name="password" class="form-control" required placeholder="Password">
            </div>
                <button type="submit" class="btn btn-primary">Login</button>
                <a href="register.php">Registration</a>
            </form>
           </div>
    </div>
    </div>
</body>
</html>