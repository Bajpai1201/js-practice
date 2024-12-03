// Primitive Datatypes => 7 datatypes total==> string, boolean, number, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isloggedIn = false;
const outsideTemp = null;
let userEmail; //undefined

const id = Symbol('123');
const anotherId = Symbol('123');
//console.log(id == anotherId);

const bigNumber = 2324233324344n;

// Non Primitive OR Reference Datatypes => Arrays, objects, functions 

const heros = ["Shaktiman", "Doga", "Bheem"]; // array
let myObj = {
    name: "rohit",
    age: 22,

} // objects

const myFunction = function(){
    console.log("hello rohit"); // function declaration
    
}
console.log(typeof bigNumber);


/*Type and typeof return value
number - number
string -  String
boolean - boolean
symbol - symbol
bigint - bigint
undefined - undefined
null - object
array - object
object - object
function - function
*/