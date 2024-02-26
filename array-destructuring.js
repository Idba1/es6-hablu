export let number = "say Hi";
let number2 = [11, 22, 44, 55, 77, 88, 66, 33, 66, 22]

let [a,b,c,d,e,f,...z] = number2;
// console.log(z);
console.log(a,b,c,d,e,f,...z)