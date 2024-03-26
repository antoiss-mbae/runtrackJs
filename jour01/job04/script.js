function bisextile(annee) {
    // Vérifier si l'année est divisible par 4
    if (annee % 4 === 0) {
        // Si l'année est divisible par 100 et non par 400, elle n'est pas bissextile
        if (annee % 100 === 0 && annee % 400 !== 0) {
            return false;
        }
        // Sinon, elle est bissextile
        return true;
    }
    // Si l'année n'est pas divisible par 4, elle n'est pas bissextile
    return false;
}
