palindrome('racecar') // true
palindrome('table') // false
palindrome('Анна') // true
palindrome('А роза упала на лапу Азора') // true

function palindrome(str){
    str = str.toLowerCase().replace(/\s/g, '');
    return str === str.split('').reverse().join(''); 
}

// function palindrome(str){
//     const len = Math.floor(str.length / 2);
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[str.length - i - 1]){
//             return false
//         }
//         return true
//     }
    
// }
