// Déclaration de la fonction fizzbuzz
function fizzbuzz() {
    // Boucle for pour parcourir les nombres de 1 à 151
    for (var i = 1; i <= 151; i++) {
        // Vérifier si le nombre est un multiple de 3 et de 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        // Vérifier si le nombre est un multiple de 3
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        // Vérifier si le nombre est un multiple de 5
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        // Si le nombre n'est pas un multiple de 3 ni de 5, afficher le nombre lui-même
        else {
            console.log(i);
        }
    }
}

// Appel de la fonction fizzbuzz
fizzbuzz();
