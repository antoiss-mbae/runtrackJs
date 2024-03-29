document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('grid-container');
    const message = document.getElementById('message');
    const recommencerButton = document.getElementById('recommencer');
    
    let emptyIndex = 8; // Index de la case vide (initialisé à la dernière case)

    // Tableau représentant la configuration initiale des carreaux
    const configurationInitiale = [1, 2, 3, 4, 5, 6, 7, 8];

    // Fonction pour mélanger aléatoirement les carreaux
    function melangerCarreaux() {
        for (let i = configurationInitiale.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [configurationInitiale[i], configurationInitiale[j]] = [configurationInitiale[j], configurationInitiale[i]];
        }
        updateGrid();
    }

    // Fonction pour mettre à jour l'affichage de la grille
    function updateGrid() {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach((item, index) => {
            if (configurationInitiale[index] === 8) {
                item.classList.add('empty');
            } else {
                item.classList.remove('empty');
            }
            item.style.order = configurationInitiale[index];
        });
    }

    // Fonction pour vérifier si le puzzle est résolu
    function estResolu() {
        return JSON.stringify(configurationInitiale) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]);
    }

    // Gérer le clic sur un carreau
    gridContainer.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('grid-item')) {
            const clickedIndex = parseInt(target.dataset.index);
            const clickedRow = Math.floor(clickedIndex / 3);
            const clickedColumn = clickedIndex % 3;

            // Vérifier si le carreau peut être déplacé
            if ((clickedRow === emptyIndex / 3 && Math.abs(clickedColumn - emptyIndex % 3) === 1) ||
                (clickedColumn === emptyIndex % 3 && Math.abs(clickedRow - Math.floor(emptyIndex / 3)) === 1)) {
                // Échanger les positions du carreau cliqué et de la case vide
                [configurationInitiale[emptyIndex], configurationInitiale[clickedIndex]] = [configurationInitiale[clickedIndex], configurationInitiale[emptyIndex]];
                emptyIndex = clickedIndex;
                updateGrid();

                // Vérifier si le puzzle est résolu
                if (estResolu()) {
                    message.textContent = "Vous avez gagné";
                    message.style.color = "green";
                    recommencerButton.style.display = "block";
                    gridContainer.removeEventListener('click', arguments.callee);
                }
            }
        }
    });

    // Gérer le clic sur le bouton "Recommencer"
    recommencerButton.addEventListener('click', function() {
        message.textContent = "";
        message.style.color = "";
        recommencerButton.style.display = "none";
        melangerCarreaux();
        gridContainer.addEventListener('click', arguments.callee);
    });

    // Mélanger les carreaux au chargement de la page
    melangerCarreaux();
});
