// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);
    
})();

((name) => {
    console.log(`DB CONNECTED2 ${name}`);
    
})("rohit") // iska bhi output ayga kyuki pahle wale code k end me ; lgana jarurui h IIFE use krne k liye


//How JS Execution works + code stack in JS
/*
🔵The working of the JavaScript works on three phases:
1. Global Execution Context
2. Memory phase / Creation phase
3. Execution phase

🔵Phase 1: Global Execution Context
The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

🔵Phase 2: Memory phase
During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

🔵Phase 3: Execution phase
After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
1. Memory phase 
2. Execution phase 
📝The return value of the 'Function Execution' context is passed to the Global Execution Context

*/
