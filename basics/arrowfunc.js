const user = {
    username: "rohit",
    price: 999,
    welcomeMsg: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
} // arrow function me "this" keyword currrent context ko refer krta h

//user.welcomeMsg()
//user.username = "sam"
//user.welcomeMsg()

// current context ka mtlb jo uper const user naam se object bna h or uske andar jo bhi values h

//console.log(this);

/*function chai() {
    let username = "rohit"
    console.log(this.username);
    
}

chai()


const chai = function() {
    let username = "rohit"
    console.log(this.username);
}
chai()
*/

const chai = () => { // arrow function aise bnate h
    let username = "rohit"
    console.log(this);
}

//chai()
/*
const addTwo = (num1, num2) => {
    return num1 + num2;
} // agar {} use kiya h to return likhna padega

console.log(addTwo(3,4)); // output 7
*/
//or

//const addTwo = (num1, num2) => num1 + num2 // yha return likhne ki jarurat ni h kyuki {} ni lge h output isme bhi 7 hi ayga
//console.log(addTwo(3,4));

//or

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3,4));// aise likhenge to bhi return ni likhna padega or output 7 ayga

//jaha pr return keyword use krte h use explicit return bolte h
// jaha return ni use hota use implicit return bolte h

const myArray = [2,3,4,5,6]

//myArray.forEach()