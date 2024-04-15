<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $nomeUsuario = $_POST["nomeCompleto"] ?? 0;
        echo"O nome do usuario é: ", $nomeUsuario ;
    ?>
</body>
</html>