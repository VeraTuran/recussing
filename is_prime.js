const isPrimeNumber = (n) => {
    for (let i = 2; i < n; i++)             // écarte 2, i++ incrémente la variable, retourne son ancienne valeur
        if (n % i === 0) return false;      // si modulo = 0 alors n est pair, pas un nombre premier (sauf 2)
    return n > 1;                           // je ne comprends plus
}

// trouvé sur https://codeburst.io/javascript-increment-and-decrement-8c223858d5ed