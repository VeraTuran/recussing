const computePowerRec = (n, p) => {
  if (p === 1){
    return n;
  }
  else {
    return computePowerRec = (n, p/2) ** 2
  }
}




// largement inspiré de l'article sur Medium
//(https://medium.com/@jtfeliciano/javascript-exponentiation-iteration-recursion-and-an-optimized-recursion-4393a4e30fd4)