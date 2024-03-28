// Sélection du textarea
var textarea = document.getElementById("keylogger");

// Ajout d'un écouteur d'événement pour les frappes de clavier
document.addEventListener("keypress", function(event) {
    // Vérification si la touche tapée est une lettre minuscule (a-z)
    var charCode = event.charCode;
    if (charCode >= 97 && charCode <= 122) {
        var letter = String.fromCharCode(charCode);

        // Si le focus est dans le textarea, ajouter la lettre deux fois
        if (document.activeElement === textarea) {
            textarea.value += letter + letter;
        } else {
            textarea.value += letter;
        }
    }
});
