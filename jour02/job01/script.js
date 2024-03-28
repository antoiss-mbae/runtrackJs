// Fonction pour afficher la citation lorsqu'on clique sur le bouton
function citation() {
    // Récupération de l'élément ayant l'id "citation"
    var citationElement = document.getElementById("citation");

    // Vérification si l'élément existe
    if (citationElement) {
        // Récupération du texte de l'élément
        var citationText = citationElement.textContent;

        // Affichage du contenu dans la console
        console.log("Citation : " + citationText);
    } else {
        console.log("L'élément avec l'id 'citation' n'a pas été trouvé.");
    }
}

// Ajout d'un écouteur d'événement pour le clic sur le bouton
document.getElementById("button").addEventListener("click", citation);
