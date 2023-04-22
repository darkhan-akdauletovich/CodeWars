function buildCharObject(str) {
    const charObj = {};
    str = str.toLowerCase().replace(/[^\w]/g);
    for(let char of str) {
        charObj[char] = charObj[char] + 1 || 1;
    }
    return charObj
}

function anagram(str1, str2){
    const aCharObj = buildCharObject(str1);
    const bCharObj = buildCharObject(str2);

    if(Object.keys(aCharObj).length !== Object.keys(bCharObj).length){
        return false
    }

    for(let char in aCharObj) {
        if(aCharObj[char] !== bCharObj[char]) {
            return false
        }
    }
    return true
}


const anagram = (str1, str2) => [...str1.toLowerCase()].sort().toString() === [...str2.toLowerCase()].sort().toString()

console.log(anagram('Friend', 'finder'))

// // спецсимвол \w - это любая цифра, буква или знак подчеркивания