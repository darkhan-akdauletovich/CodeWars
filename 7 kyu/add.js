// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// const add = (num1, num2) => {
//     let arr1 = [...num1.toString()].map(Number).reverse();
//     let arr2 = [...num2.toString()].map(Number).reverse();
//     let sum = arr1.map(function (num, idx) {
//       return num + arr2[idx]
//     })
//     return sum
//   }

const leftPad = (one, two)=>{
  if(one.length === two.length){
    return [one, two]
  } else if(one.length > two.length){
    const paddedTwo = two.padStart(one.length, '0');
    return [one, paddedTwo]
  } else {
    const paddedOne = one.padStart(two.length, '0');
    return [paddedOne, two]
  }
}
function add(num1, num2) {
  const padded = leftPad(num1.toString(), num2.toString())
  let final = '';
  let paddedOne = padded[0].split('');
  padded[1].split('').map( (c, i)=>{
     let int = ( parseInt(padded[1][i]) + parseInt(paddedOne[i]) ).toString();
     final += int
   })
  return parseInt(final);
}

// String.prototype.padStart()
// The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

// String.prototype.split()
// The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.