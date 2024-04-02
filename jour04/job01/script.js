// Récupérer le bouton
const button = document.getElementById('button');

// Ajouter un événement "click" au bouton
button.addEventListener('click', () => {
    // Effectuer une requête Fetch pour récupérer le contenu du fichier expression.txt
    fetch('expression.txt')
        .then(response => {
            // Vérifier si la requête a réussi
            if (!response.ok) {
                throw new Error('La requête a échoué');
            }
            // Extraire le texte de la réponse
            return response.text();
        })
        .then(data => {
            console.log('Contenu récupéré :', data); // Afficher le contenu récupéré dans la console
            // Créer un élément paragraphe
            const paragraph = document.createElement('p');
            // Définir le contenu du paragraphe avec le contenu du fichier
            paragraph.textContent = data;
            // Récupérer l'élément où nous voulons insérer le paragraphe
            const content = document.getElementById('content');
            // Vider le contenu existant
            content.innerHTML = '';
            // Insérer le paragraphe dans le corps de la page
            content.appendChild(paragraph);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération du fichier :', error);
        });
});
