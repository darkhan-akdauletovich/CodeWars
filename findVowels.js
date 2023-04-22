// function findVowels(str) {
//     let counter = 0;
//     const vowels = ['a', 'e', '0', 'i', 'u'];

//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             counter+=1
//         }
//     }
//     return counter
// }

function findVowels(str) {
    const matched = str.match(/[aeiou]/gi);
    return matched ? matched.length : 0;
}

console.log(findVowels('Arman'))