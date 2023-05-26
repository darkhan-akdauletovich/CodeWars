const isIsogram = str => !/(\w).*\1/i.test(str);


console.log(isIsogram("moose"))
console.log(isIsogram("Derma"))