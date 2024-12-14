function sayMyName() { // here function is a keyword and sayMyName is function name.
   //console.log("rohit");

} // function def

sayMyName() // here sayMyName is reference and () is execution.

//function addTwoNum(num1, num2){ // yha () me jo bhi likha hota h use parameter kahte h
// console.log(num1 + num2);

//}

function addTwoNum(num1, num2) { // agar yha koi number ni denge to output NaN ayga 

   let result = num1 + num2; 
   return result; // return statemnet lgane k baad koi bhi cnosole log execute ni hota h
} 

const result = addTwoNum(3, 5); //yha pr () isme jo values hoti h unko arguments bolte h

//console.log("Result: ", result);

function loginUserMsg(username = "sam"){ //agar yha pr username me koi value assign kr denge to if wali condition ni chalegi seedhe output ayga 
   if(!username) {
      console.log("Please enter a valid username!");
      return
   }
   return `${username} just logged in`
}

//console.log(loginUserMsg("rohit")); //yha agar kuch value pass ni krenge to undefined output show hoga
//console.log(loginUserMsg("rohit")); //or agar yha () me koi value pass kr di to output me jo value hogi wo override ho jaygi jaise sam ki jagah rohit aa jayga

function calculateCartPrice(val1, val2, ...num1){ // ... rest operator h isi ko spread operator bhi kahte h pr function me rest bolte h ye values ko ek array me daal deta h
   return num1;
}

//console.log(calculateCartPrice(200,300,400, 500, 2000));

const user = {
   username: "rohit",
   price: 199
}

function handleObject(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
   
}

//handleObject(user);

handleObject({
   username: "sam",
   price: 399
})

const myNewArray = [200,300,400,100];

function returnSecValue(getArray){
   return getArray[2];
}

//console.log(returnSecValue(myNewArray));
console.log(returnSecValue([200,300,400,100]));

