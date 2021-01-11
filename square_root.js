const computeSquareRoot = (n) => {
    let i = 1;
    const found = false;
    while (!found){
        if ( i * i === n){
            return i;
        }
        else if (i * i > n){
            let result = square(num, i-1, i);
            return result;
        };
        i++;
    }
}

// https://www.tutorialspoint.com/square-root-function-without-using-math-sqrt-in-javascript