// Attacher un gestionnaire d'événements au bouton "Afficher" utilisant jQuery
$(document).ready(function() {
    $("#afficher").click(function() {
        $("#citation").show(); // Afficher l'élément avec l'ID "citation"
    });

    // Attacher un gestionnaire d'événements au bouton "Cacher" utilisant jQuery
    $("#cacher").click(function() {
        $("#citation").hide(); // Cacher l'élément avec l'ID "citation"
    });
});
