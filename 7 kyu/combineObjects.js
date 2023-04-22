// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

// function combine(obj1, obj2) {
//     const arr1 = Object.entries(obj1);
//     const arr2 = Object.entries(obj2);
//     const arr3 = arr1.concat(arr2);
//     let res = arr3.forEach(key => {
//         if (key !== 1) {
//             return arr3[key] + arr3[key]
//         }
//         return res
//     })
// //   const merged = {...obj1, ...obj2};
// //   return merged
// }

function combine(...objs) {
    return objs.reduce((a, b) => {
      for (let k in b) {
        if (b.hasOwnProperty(k))
          a[k] = (a[k] || 0) + b[k];
      }
      return a;
    }, {});
  }

console.log(combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }))