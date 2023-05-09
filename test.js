console.log(1);
let promise3
setTimeout(()=> {
    console.log(2)
    promise3 = new Promise(resolve => {
        console.log(9);
        resolve(10);
    })
}, 2000);

setTimeout(()=> {
    console.log(8)
}, 1000);

const promise1= new Promise(resolve => {
    console.log(3);
    resolve(4);
});

const promise2 = new Promise(resolve => {
    console.log(5);
    resolve(6)
});

promise1.then(console.log);
promise2.then(console.log);

console.log(7);
// 1, 7, 3 , 4, 5, 6, 2
//1, 3, 5, 7, 4, 6, 2
//1, 3, 5, 4, 5, 6, 7, 8, 2, 9, 10
// 1, 3, 5, 7, 4, 6, 8, 2, 9, 10
