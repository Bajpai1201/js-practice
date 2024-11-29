const accountId = 144553; //value will not changed
let accountEmail = "bajpairohit333@gmail.com";
var accountPassword = "123456";

accountCity = "jaipur";

// accountId = 2; not allowed

accountEmail = "rohit@gmail.com";
accountPassword = "11223344";
accountCity = "pune";
 let accountState; //agar js me kisi var me koi value ni assign krte h to output me undefined show hota h

console.log(accountEmail);


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// js me kai sare values print krane ho to console.table use kr sakte h jisse kai sare values ek sath ek bar me print ho jayenge 

/*
Prefer not to use var beacause of issue in block scope and functional scope...
block scope jo bhi curly braces {} me hota h usko bolte h.
*/