// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);
    
})();

((name) => {
    console.log(`DB CONNECTED2 ${name}`);
    
})("rohit") // iska bhi output ayga kyuki pahle wale code k end me ; lgana jarurui h IIFE use krne k liye



