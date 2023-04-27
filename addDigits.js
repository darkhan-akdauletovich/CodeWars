const addDigits = (num) => {
    let digits = Array.from(String(num), Number)
    let total = 0;
    let total2
    for (let i=0;i<digits.length;i++){
            total += digits[i]
    }
        return total
}
    // if(digits.length !== 0){
    //         return digits.reduce((a,b)=> a + b)
    //     }
    // if (digits1 = Array.from(String(digits), Number).length !== 0){
    //     return digits1.reduce((a,b)=> a + b)
    // }
    // return digits1
    


console.log(addDigits(199))