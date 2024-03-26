// Déclaration de la fonction jourTravaille
function jourTravaille(date) {
    // Récupération de la journée, du mois et de l'année de la date passée en paramètre
    var jour = date.getDate();
    var mois = date.getMonth() + 1; // Les mois sont indexés à partir de 0, donc on ajoute 1
    var annee = date.getFullYear();

    // Liste des jours fériés de l'année 2024 (exemple)
    var joursFeries = ["01-01", "04-05", "04-07", "05-01", "05-08", "05-30", "07-04", "09-02", "11-28", "12-25"];

    // Formatage de la date pour comparer avec les jours fériés
    var dateFormatee = (mois < 10 ? '0' : '') + mois + '-' + (jour < 10 ? '0' : '') + jour;

    // Vérification si la date est un jour férié
    if (joursFeries.includes(dateFormatee)) {
        console.log("Le " + jour + "/" + mois + "/" + annee + " est un jour férié.");
    }
    // Vérification si la date est un samedi ou un dimanche (week-end)
    else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, le " + jour + "/" + mois + "/" + annee + " est un week-end.");
    }
    // Sinon, c'est un jour travaillé
    else {
        console.log("Oui, le " + jour + "/" + mois + "/" + annee + " est un jour travaillé.");
    }
}

// Exemple d'utilisation de la fonction
jourTravaille(new Date(2024, 0, 1)); // Jour férié (1er janvier 2024)
jourTravaille(new Date(2024, 4, 5)); // Jour férié (5 mai 2024)
jourTravaille(new Date(2024, 3, 7)); // Jour férié (7 avril 2024)
jourTravaille(new Date(2024, 3, 8)); // Week-end (8 avril 2024)
jourTravaille(new Date(2024, 3, 9)); // Jour travaillé (9 avril 2024)
