function validateLogin(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Remplacez par les données réelles de votre base de données
    const validUsername = "utilisateur";
    const validPassword = "motdepasse";

    if (username === validUsername && password === validPassword) {
        // Si les informations sont correctes, redirige vers la page du graphique
        window.location.href = "index.html";
    } else {
        // Sinon, affiche un message d'erreur
        errorMessage.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
    }
}
