const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
        
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "bajpairohit333@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "rohit", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
        
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return username;
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("The promise is either resolved or rejected");

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "rohit", password: "123"})
        } else{
            reject('ERROR: js went wrong')
        }
        
    }, 1000)
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
    
}

consumePromiseFive()

