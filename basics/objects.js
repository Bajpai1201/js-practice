// singleton

//object literals
//Object.create another way to create a object

const mySym = Symbol("key1") 
const jsUser = {
name: "Rohit",
"fullname": "Rohit Bajpai",
[mySym]: "mykey1",
age: 26,
location: "Kanpur",
email: "bajpairohit333@gmail.com",
isLoggedIn: false,
lastLoginDays: ["Monday", "Saturday"]
} //how to create a object

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullname"]);
// console.log(jsUser[mySym]);

jsUser.email = "rohit@gmail.com";
//Object.freeze(jsUser);
jsUser.email = "rohit@chatgpt.com";
// console.log(jsUser);
jsUser.greetings = function(){
    console.log("Hello JS User");
}

console.log(jsUser.greetings());

jsUser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetings());





