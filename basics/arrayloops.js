// for of

// [{}, {}, {}]

const array = [1, 2, 3, 4, 5];

for (const num of array) {
    //console.log(num);

}

const greetings = "Hello World!";

for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);

}

// maps-------- unique values represent krte h
// iterations are not allowd in maps--

const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('FR', "France")

//console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);

}

/*const myObj = {
    'game1' : 'NFS',
    'game2' : 'VC'
}

for (const [key, value] of myObj) {
    //console.log(key, ':-', value);
    // objects are not iterable
}
*/
// forin loop-----

const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);

}

const prog = ["js", "java", "cpp", "py"];

for (const key in prog) {
    //console.log(prog[key]);
}


// Higher Order Functions-------
const coding = ["java", "js", "py", "cpp", "ruby"];

//coding.forEach(  function (val) {
//   console.log(val);

//})
// or
//coding.forEach( (item) => {
//console.log(item);

//})

//function printMe(item){
//   console.log(item);

//}

//coding.forEach(printMe)

coding.forEach((item, index, array) => {
    //console.log(item, index, array);

})

const myCod = [
    {
        langName: "javascript",
        langFilename: "js"
    },

    {
        langName: "java",
        langFilename: "java"
    },
    {
        langName: "cpp",
        langFilename: "cp",
    }
]

myCod.forEach( (item) => {
    console.log(item.langName);
    
})