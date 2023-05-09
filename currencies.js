const input = [
    ['usd', 'buy', 10000],
    ['usd', 'sell', 5000],
    ['gbp', 'buy', 9000],
    ['eur', 'sell', 7000],
    ['uah', 'buy', 10000],
    ['usd', 'sell', 25000],
]

const output = {
    usd: [10000, 30000],
    gbp: [9000, 0],
    eur: [0, 7000],
    uah: [10000, 0],
}

let result2 = {};
input.forEach((item) =>{
    let [currency, type, amount] = item;
    if(!result2[currency]){
        result2[currency]=[0,0];
    }

    result2[currency][type === 'buy' ? 0 : 1] += amount;
})
console.log(result2)

let result1 = input.reduce((acc, curr)=> {
    acc[curr[0]] = acc[curr[0]] || [0, 0];
    acc[curr[0]][curr[1] === 'buy' ? 0 : 1] += curr[2];
    return acc
}, {})

console.log(result1)

