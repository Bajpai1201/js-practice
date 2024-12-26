// for 

for (let i = 0; i <= 10; i++){
    const element = i;
    if (element == 5){
        //console.log("5 is best number");
        
    }
    //console.log(element);
    
} // ctrl + D press krne se 1 se jyada names ko rename kr sakte h ek baar me

for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for(let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        //console.log(i + '*' + j + ' = ' + i*j);
        
    }
}

let myArray = ["flash", "batman", "thor"]
// console.log(myArray.length);

for( let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// keywords ==> break and continue
/*
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`value of 1 is ${index}`);
    
} // control flow ko break krne k liye break use krte h
*/
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of 1 is ${index}`);
    
} // continue ignore ho jata h value detect hone k baad or wo value print ni hogi

