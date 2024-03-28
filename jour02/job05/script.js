// Fonction pour changer la couleur du footer en fonction du pourcentage de défilement
function changeFooterColor() {
    var footer = document.getElementById("footer");
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.clientHeight;
    var scrollPosition = window.scrollY;
    var maxScroll = documentHeight - windowHeight;
    var scrollPercentage = (scrollPosition / maxScroll) * 100;

    // Changer la couleur du footer en fonction du pourcentage de défilement
    if (scrollPercentage <= 25) {
        footer.style.backgroundColor = "blue";
    } else if (scrollPercentage <= 50) {
        footer.style.backgroundColor = "green";
    } else if (scrollPercentage <= 75) {
        footer.style.backgroundColor = "yellow";
    } else {
        footer.style.backgroundColor = "red";
    }
}

// Ajout d'un écouteur d'événement pour le défilement de la fenêtre
window.addEventListener("scroll", changeFooterColor);
