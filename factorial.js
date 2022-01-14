function fac(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res = res * i;
    }
    return res;
}
//console.log('Factorial is:', fac(5));

function facRecur(n) {
    if (n == 1) {
        return 1;
    }
    else {
        return n * fac(n - 1);
    }
}
console.log('Factorial is:', facRecur(4));