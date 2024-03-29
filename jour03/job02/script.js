document.addEventListener('DOMContentLoaded', function() {
    const imagesContainer = document.getElementById('arc-en-ciel');
    const arcEnCielComplet = document.getElementById('arc-en-ciel-complet');
    const message = document.getElementById('message');
    const melangerButton = document.getElementById('melanger');

    // Fonction pour mélanger les images
    function melangerImages() {
        const images = Array.from(imagesContainer.children);
        images.sort(() => Math.random() - 0.5); // Mélanger l'ordre des images
        images.forEach(image => imagesContainer.appendChild(image)); // Réorganiser les images dans le conteneur
        verifierOrdreImages(); // Vérifier l'ordre des images après le mélange
    }

    // Fonction pour vérifier l'ordre des images
    function verifierOrdreImages() {
        const images = Array.from(arcEnCielComplet.children);
        console.log("Images :", images);
        const ordreCorrect = images.every((image, index) => {
            console.log("Image data-order :", image.dataset.order);
            console.log("Index :", index);
            return parseInt(image.dataset.order) === index + 1;
        });
        console.log("Ordre correct :", ordreCorrect);
        if (ordreCorrect) {
            afficherMessage('Vous avez gagné', 'vert');
        } else {
            afficherMessage('Vous avez perdu', 'rouge');
        }
    }
    

    // Fonction pour afficher un message avec une couleur spécifiée
    function afficherMessage(texte, couleur) {
        console.log("Afficher le message :", texte, "avec la couleur :", couleur);
        message.textContent = texte;
        message.classList.remove('vert');
        message.classList.remove('rouge');
        message.classList.add(couleur);
    }
    
    

    // Gérer le clic sur le bouton "Mélanger"
    melangerButton.addEventListener('click', function() {
        melangerImages();
    });

    // Vérifier l'ordre des images au chargement de la page
    verifierOrdreImages();
});
