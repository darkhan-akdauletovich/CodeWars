// I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

// You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:

// {
//   'algebra': 6,
//   'history': 8,
//   'physics': 9,
//   'geography': 2,
//   'chemistry': 9
// }
// Return please :

// 'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.

// 'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.

// 'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
// If two or three sons have the same highest marks, you need to choose the younger one. Use the age table which is constant and preloaded:

// const ageTable = {
//                   'firstSonAge': 14,
//                   'secondSonAge': 9,
//                   'thirdSonAge': 8
//                 }
function whoseBicycle(diary1, diary2, diary3) {
    let first = Object.values(diary1).reduce((a,b) => a+b)
    let second = Object.values(diary2).reduce((a,b) => a+b)
    let third = Object.values(diary3).reduce((a,b) => a+b)
    
    if ( first > second && first > third){
        return 'I need to buy a bicycle for my first son.'
    } else if ( second > first && second > third){
        return 'I need to buy a bicycle for my second son.'
    } else if (third > first && third > second) {
        return 'I need to buy a bicycle for my third son.'
    }else if (third === second || third === first) {
        return 'I need to buy a bicycle for my third son.'
    } else if(second === first) {
        return 'I need to buy a bicycle for my second son.'
    } else {
        return 'I need to buy a bicycle for my third son.'
    }
}
//     for ( let a of diary1){

//     }
//   }
// let first = {
//     'algebra': 6,
//     'history': 7,
//     'physics': 8,
//     'geography': 9,
//     'chemistry': 10
//   }

// for(let c = 0; c < first.length; c++){
//     return first[c]
// }

console.log(Object.values(first).reduce((a,b) => a+b))

