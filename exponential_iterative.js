const computePowerIt = (n, p) => {
    let sum = n;
    for (let i=2; i <= p; i++){
        sum *= n;
    }
    return sum;
}

// largement inspiré de l'article sur Medium
// https://medium.com/@jtfeliciano/javascript-exponentiation-iteration-recursion-and-an-optimized-recursion-4393a4e30fd4