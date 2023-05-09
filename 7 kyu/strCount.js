const strCount = obj => {
    let count = 0;
    
    let values = Object.values(obj)
    for (let i = 0; i <  values.length; i++){
        if(typeof Object.values(obj)[i] == 'string'){

            return count++
        }
    } 
    return count
    }

    

console.log(strCount({
    first:  "1",
    second: "2",
    third:  false,
    fourth: ["anytime",2,3,4],
    fifth:  null,
    sixth:  undefined,
    seventh:{}
  }))