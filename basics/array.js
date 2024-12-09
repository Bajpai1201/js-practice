//array

const myArr = [0, 1, 2, 3, 4, 5, true, "rohit"];
//console.log(myArr);
const myHeros = ["shaktiman", "naag", "kaal"];
const myArr2 = new Array(1,2,3,4);
//console.log(myArr[1]);

myArr.push(6);
// console.log(myArr);
myArr.pop();
// console.log(myArr);
myArr.unshift(3);
// console.log(myArr);
myArr.shift();
// console.log(myArr);
// console.log(myArr.includes(4));
// console.log(myArr.indexOf(8));
// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
const myn1 = myArr.slice(1,4);
// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1,4);
// console.log(myn1);
// console.log(myn2);

const marvel_heros =["Thor", "Ironman", "Spiderman", "Hulk"];
const dc_heros = ["Batman", "Flash", "Superman"];

//marvel_heros.push(dc_heros);

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
//console.log(all_new_heros);

const anotherArr = [1,2,3, [4,5,6],7, [6,7, [4,5]]];
const real_anotherArr = anotherArr.flat(Infinity);
console.log(real_anotherArr);

console.log(Array.isArray("rohit"));
console.log(Array.from("rohit"));
console.log(Array.from({name: "rohit"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));















/*
SUMMARRY:

1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.


*/