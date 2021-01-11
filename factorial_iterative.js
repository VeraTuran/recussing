function factorial(x) {
    let result = 1;
    for (let i = 1; i <= x; i++)
      result = result * i;
    return result;
  }
  
console.log(factorial(5));