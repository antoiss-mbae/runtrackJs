// Fonction pour vérifier si un nombre est premier
function estNombrePremier(nombre) {
    if (nombre <= 1) return false;
    if (nombre <= 3) return true;
    if (nombre % 2 === 0 || nombre % 3 === 0) return false;
    let i = 5;
    while (i * i <= nombre) {
        if (nombre % i === 0 || nombre % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Fonction sommeNombresPremiers
function sommeNombresPremiers(nombre1, nombre2) {
    // Vérifier si les deux nombres sont premiers
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        // Si oui, retourner leur somme
        return nombre1 + nombre2;
    } else {
        // Sinon, retourner false
        return false;
    }
}

// Exemples d'utilisation de la fonction
console.log(sommeNombresPremiers(3, 5)); // Devrait afficher 8 (3 + 5)
console.log(sommeNombresPremiers(6, 7)); // Devrait afficher false (6 n'est pas un nombre premier)
