//1.  if condition
/*
const isUserLoggedIn = true
const temp = 41;
if (temp < 50) {
    console.log("less than 50");
    
}
else{
console.log("more than 50");
}*/

// === strict checking

// const score = 200;

// if (score > 100){
    // let power = "fly"
    // console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`);

/*const balance = 1000;

//if (balance > 500) console.log("test"); // this is called implicit scope yha ek hi line me pura code execute ho jata h

if (balance < 500) {
    console.log("less than 500");
    
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900){
    console.log("less than 900");
    
}
else{
    console.log("less than 1200");
    
}
*/ //nested if else example

/*const userLoggedIn = true
const debitCard = true
const userLoggedInfromGoogle = false
const userLoggedInfromEmail = true
if (userLoggedIn && debitCard && 2==3) {
    console.log("allow to buy courses");
    
}
if (userLoggedInfromGoogle || userLoggedInfromEmail) {
    console.log("user logged in");
    
}
*/

// switch case----syntax below
/*
switch (key) {
    case value:

    break;

    default:
        break;
}
*/
/* switch case example
const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

        default:
            console.log("default case matched");
            break;
        
}
*/

/*const userEmail = "rohit.ai" // agar yha kuch na hota string k andar to else print hota
// agar empty [] hota to if condition print hoti h
if(userEmail) {
    console.log("got user email");
    
} else{
    console.log("don't have user email");
    
} // this is called truthy and falsy values

// falsy values are---
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values are----
// [], "0", 'false', " ", {}, function(){}
*/
const userEmail = "rohit.ai"
//if (userEmail.length === 0) {
//    console.log("Array is empty");
    
//}

const emptyObj = {}

if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
    
}

// && AND operator, || OR operator, (??) Nullish Coalescing Operator: null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 25
val1 = null ?? 10 ?? 15 // null coalescing operator lgane se agar kahi pr null ya undefined diya h to usse pahle jobbhi value di hoti h wahi assign hoti h agar value ni h to null ya undefined assign hota h

console.log(val1);

// ternery operator

//condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



