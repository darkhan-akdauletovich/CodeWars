// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.
let example = [1, 2, 3]
function plusOne( n){
    return n * 2
}

var pap = function(arr, fn) {
    let n = []
    arr.forEach(ar=> {
        n.push(fn(ar))
    })
    return n
    n = arr.map(element => fn(element))
    return n
};
console.log(pap(example, plusOne))
