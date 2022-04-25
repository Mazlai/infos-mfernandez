<?php

//Si le formulaire a été soumis, l'envoi s'effectue, sinon ce n'est pas le cas
if(isset($_POST['commentaire'])) {
    $message = "Ce message vous a été envoyé via le formulaire de votre site personnel https://mazlai.github.io/info-mfernandez/
    Nom : " . $_POST['nom'] . "
    Email : " . $_POST['adresse'] . "
    Message : " . $_POST['commentaire'];

    $retour = mail("micky31200@gmail.com", $_POST['sujet'], $message, "From:micky31200@gmail.com" . "\r\n" . "Reply-to:" . $_POST['adresse']);

    if($retour){
        echo "<p>L'email a bien été envoyé.</p>";
    }
}

?>
