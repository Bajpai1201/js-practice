

//----------object literals start----------
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
    //console.log("Hello JS User");
}

//console.log(jsUser.greetings());

jsUser.greeting = function(){
 //   console.log(`Hello JS User, ${this.name}`);
}

//console.log(jsUser.greeting());
//console.log(jsUser.greetings());

//------object literal end----

//-------singleton start--------

//const tinderUser = new Object(); singleton obj. or neeche wala const dono ka same output hota h
const tinderUser = {}; // non singleton object
tinderUser.id = "23fhfj";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rohit",
            lastname: "bajpai"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};
//const obj3 = {obj1, obj2};
//const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = {...obj1, ...obj2} // combining objects using spread operator
//console.log(obj3);

const user = [
    {
        id1: 1,
        email: "hot@email.com" 
    },
    {
        id1: 1,
        email: "hot@email.com" 
    },
    {
        id1: 1,
        email: "hot@email.com" 
    }


]

user[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));







