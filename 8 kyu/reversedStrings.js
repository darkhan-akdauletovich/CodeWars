//Complete the solution so that it reverses the string passed into it.

function solution(str){
    return [...str].reverse().join("");
  }

// function solution(str){
//     let newString = ""
   
//     for (let i = str.length - 1; i >= 0; i--) {
//       newString += str[i];
//     }
//     return newString;
//   }