// const lines = 6;
// let res =''
// for (let i = 0; i <= lines; i++){
//     for ( let j = 0; j <= lines-i; j++){
//         res+=" ";
//     }
//         for(let j=0;j<2*i+1;j++){
//         res += "*"
//         }
//         res += "\n" 
// }
// console.log(res)
let res = ''
for (let i=5; i>=0; i--){
    for (let j=0; j<i; j++){
        res += '*' 
        // console.log(1);
    }
    
    console.log(res);
    res = ''
}
