// Simuler des utilisateurs avec un tableau
const users = [
    {
        username: "KOKO",
        password: "lucas"
    },
    {
        username: "utilisateur2",
        password: "motdepasse2"
    }
];

// Fonction de validation de connexion
function validateLogin(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Vérifier si l'utilisateur existe dans le tableau des utilisateurs
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Si les informations sont correctes, rediriger vers la page du graphique
        window.location.href = "index.html";
    } else {
        // Sinon, afficher un message d'erreur
        errorMessage.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
    }
}
