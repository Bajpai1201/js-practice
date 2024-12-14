function sayMyName(){ // here function is a keyword and sayMyName is function name.
    console.log("rohit");
    
} // function def

sayMyName() // here sayMyName is reference and () is execution.

//function addTwoNum(num1, num2){ // yha () me jo bhi likha hota h use parameter kahte h
   // console.log(num1 + num2);
    
//}

 function addTwoNum(num1,num2){

    let result = num1 + num2;
    return result; // return statemnet lgane k baad koi bhi cnosole log execute ni hota h
 } // agar yha koi number ni denge to output NaN ayga or yha pr () isme jo values hoti h unko arguments bolte h

const result = addTwoNum(3, 5);

console.log("Result: ", result);
