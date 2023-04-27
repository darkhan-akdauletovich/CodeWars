const fibonacci = (n) => {
    const result = [0,1]
    for(let i=2;i<=n;i++){
        const prevNum = result[i-1];
        const nextNum = result[i-2];
        result.push(prevNum + nextNum)
    }
    return result[n] 
}
console.log(fibonacci(10))

const fibonacciShort = (n) => {
    let a = 1,
        b = 1;
    for(let i = 3;i<=n;i++){
            [a,b] = [b,a+b]
    }
    return b
}
console.log(fibonacciShort(10))

const fibonacciRec = (n) => {
    if(n<2){
        return n
    }
    return fibonacciRec(n-1)+fibonacciRec(n-2)
}
console.log(fibonacciRec(10))