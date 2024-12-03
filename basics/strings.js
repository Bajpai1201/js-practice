const name = "rohit";
const repoCount = 13;

//console.log(name + repoCount + " value"); older way to concatenate strings

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //modern way

// another way to declare a string

const gameName = new String('rohitrb');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,6); //slice method
console.log(newString);
const anotherString = gameName.slice(-7,4);
console.log(anotherString);

const newstringOne = "    rohit    ";
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://rohit%20bajpai.com";
console.log(url.replace('%20', '-'));

// for more string methods goto mdn js documentation








