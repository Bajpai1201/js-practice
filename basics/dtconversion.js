let score = true; //string jo bhi double quotes me hota h wo string h
console.log(typeof score);
console.log(typeof(score));

let valueinNumber = Number(score);
console.log(typeof valueinNumber);
console.log(valueinNumber);

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// "" => false
// "rohit" => true
let isLoggedin = "rohit";
let booleanisLoggedin = Boolean(isLoggedin);
console.log(booleanisLoggedin);