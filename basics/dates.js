//dates date ek object hota h

let myDate = new Date();
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date("2024-01-12");

//console.log(myCreatedDate);

let myTimestamp = Date.now();

//console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getMinutes());
// console.log(newDate.getUTCDay());

//`${newDate.getDay()} and the time is `

newDate.toLocaleString('default',{
    weekday: "long"  

})







