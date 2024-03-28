// Sélection de l'élément bouton et du compteur
var button = document.getElementById("button");
var compteur = document.getElementById("compteur");

// Initialisation du compteur de clics
var count = 0;

// Fonction pour incrémenter le compteur et mettre à jour le texte
function incrementAndDisplay() {
    count++; // Incrément du compteur
    compteur.textContent = count; // Mise à jour du texte du compteur
}

// Ajout d'un écouteur d'événement pour le clic sur le bouton
button.addEventListener("click", incrementAndDisplay);
