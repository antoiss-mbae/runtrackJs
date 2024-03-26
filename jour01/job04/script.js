// Déclaration de la fonction bisextile
function bisextile(annee) {
    // Vérifier si l'année est divisible par 4
    if (annee % 4 === 0) {
        // Si l'année est divisible par 100 et non divisible par 400, ce n'est pas une année bissextile
        if (annee % 100 === 0 && annee % 400 !== 0) {
            return false;
        }
        // Sinon, c'est une année bissextile
        return true;
    } else {
        return false;
    }
}

// Exemple d'utilisation de la fonction
console.log(bisextile(2020)); // Devrait afficher true
console.log(bisextile(2021)); // Devrait afficher false
