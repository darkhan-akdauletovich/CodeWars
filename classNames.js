let classNames = [
    'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'
]

let classNamesCount = {};
for(let i=0;i<classNames.length;i++){
    let curr = classNames[i]
    if(classNamesCount[curr]){
        classNamesCount[curr]+=1
    } else{
        classNamesCount[curr]=1
    }
}
let result = Object.keys(classNamesCount).sort((a,b)=> classNamesCount[b]- classNamesCount[a])
console.log(result)
// function freq(arr){
// let test = {}
// for ( let i of arr){
//     test[i] = test[i] + 1 || 1 
// }

// let a = {} 
// // let a = Object.assign({}, f)
// // let b ={}
// // const swapped = Object.entries(a).map(([key, value]) => ({[value] : key}));
// // b = Object.assign({}, ...swapped)
// // let c = Object.entries(b).reverse()
// // let d = Object.values(c)

// return test
// }
// console.log(freq(classNames))
