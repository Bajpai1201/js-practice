//const coding = ["js", "ruby", "java", "python", "cpp"];

//const values = coding.forEach( (item) => {
//    console.log(item);
   // return item
//})

//console.log(values);

// filter method-----------

//const myNums = [1,2,3,4,5,6,7,8,9,10];

//const newNums = myNums.filter( (num) => {
  // return num > 4
//} ) // agar {} use kiya h to return keyword use krna padega
//console.log(newNums);

//const newNums = []

//myNums.forEach( (num) => {
    //if (num > 4) {
    //    newNums.push(num)
  //  }
//} )

//console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1980, edition: 2007},
    { title: 'Book Two', genre: 'History', publish: 1981, edition: 2008},
    { title: 'Book Three', genre: 'GK', publish: 1982, edition: 2009},
    { title: 'Book Four', genre: 'Hindi', publish: 1983, edition: 2010},
    { title: 'Book Five', genre: 'English', publish: 1984, edition: 2011},
    { title: 'Book Six', genre: 'Hindi', publish: 1985, edition: 2012},
    { title: 'Book Seven', genre: 'Maths', publish: 1986, edition: 2001},
    { title: 'Book Eight', genre: 'Science', publish: 1987, edition: 2002},

];

//let userBooks = books.filter( (bk) => bk.genre == 'Hindi')

//userBooks = books.filter( (bk) => {return bk.publish >= 1982 && bk.genre === "Science"})
//console.log(userBooks);


// map method--------

// const myNum = [1,2,3,4,5,6,7,8,9,10];

//const newNums = myNums.map( (num) => {return num + 10})

// const newNums = myNums
//                 .map( (num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

//  console.log(newNums);

// reduce method-------------

const myNum = [1,2,3]

// const myTotal = myNum.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

const myTotal = myNum.reduce( (acc, curr) => acc+curr, 0)// 0 acc ki value h
//console.log(myTotal);

const shopCart = [
    {
        itemName: "JS course",
        price: 2000
    },
    {
        itemName: "react course",
        price: 1999
    },
    {
        itemName: "redux course",
        price: 999
    }
]

const pay = shopCart.reduce( (acc, item) => acc + item.price, 0)

console.log(pay); 

// reduce method ka use shopping cart me jyada hota h


