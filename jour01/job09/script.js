// Fonction de tri
function tri(numbers, order) {
    // Vérifier si l'ordre est ascendant
    if (order === 'asc') {
        return numbers.sort((a, b) => a - b); // Tri ascendant
    }
    // Vérifier si l'ordre est décroissant
    else if (order === 'desc') {
        return numbers.sort((a, b) => b - a); // Tri décroissant
    }
    // Si l'ordre n'est ni 'asc' ni 'desc', retourner le tableau non trié
    else {
        console.log("L'ordre spécifié n'est pas valide. Veuillez utiliser 'asc' pour un tri ascendant ou 'desc' pour un tri descendant.");
        return numbers;
    }
}

// Exemple d'utilisation de la fonction
var numbers = [5, 3, 8, 1, 2, 7, 4, 6];
console.log("Tableau non trié :", numbers);
console.log("Tri ascendant :", tri(numbers.slice(), 'asc')); // Utilisation de slice() pour éviter la modification du tableau original
console.log("Tri décroissant :", tri(numbers.slice(), 'desc')); // Utilisation de slice() pour éviter la modification du tableau original
console.log("Tableau non trié (après tri) :", numbers); // Vérification que le tableau original n'est pas modifié
