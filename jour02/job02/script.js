// Fonction pour afficher/masquer l'article
function showhide() {
    var articleElement = document.getElementById("article");

    // Si l'article existe, le supprimer
    if (articleElement) {
        articleElement.parentNode.removeChild(articleElement);
    } 
    // Sinon, créer un nouvel article et l'ajouter à la page
    else {
        articleElement = document.createElement("article");
        articleElement.id = "article";
        articleElement.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(articleElement);
    }
}

// Ajout d'un écouteur d'événement pour le clic sur le bouton
document.getElementById("button").addEventListener("click", showhide);
