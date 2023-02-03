// console.log("Starting");
// var a = 10;
// a += 1;
// console.log("a");

// ! setTimeout(callback,time) API

// setTimeout(()=>{
//     console.log("i'am asynchronous code after 5 seconds");
// },5000);
// console.log("a");
// console.log("end");


/*
        |       |
        |       |                ______________
        |       |               |              |
        |       |               |              |
        |       |               |              |
        |       |               |              |
        |       |               |______________| WebAPI
        |       |
        |       |
        |       |                ______________
        |       |               |______________| microTask Queue
        |       |   <--------
        |       |    eventLoop
        |       |    ------->
        |       |                ______________
        |_______|               |______________| callBack Queue
        CallStack
*/
// * Asynchronous javascript
// ? Asynchronous programming is a technique in JavaScript that enables your program to start a potentially long running task and still be able to be responsive to other events.while that task runs rather than having to wait untill that task has finished.Once that task has finished your program is presented with the result.
/*
Asynchronous javascript is programming technique that
so that time taking code will not block synchronous code
to use asynchronous javascript we use 
? event loop,
    event is a program its task is to monitor the callback queue ans callStack
    whenevet there is an instruction is waiting in callback queue
    eventloop will check the call stack the time the call stack is empty, the event loop will send the instruction waiting
? callback queue,
    in all call back queue we have a asynchronous instruction waiting for their execution
? mirotask queue and
    in microqueue we have asynchronous instruction waiting for their execution to complete
    microtask queue is a higher priority
web api area(heap area)
*/

// ? AJAX
/*
Ajax is a set of web development techniques that uses various wev technologies on the client side to create asynchronous web applications.
with ajax, web application can send and receive data from a remote server asynchronously without interfering with the display and behavior of the existing web application.
*/
// ? setTimeout()
// setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
// SYNTAX: setTimeout(CALLBACK_FUNCTION, TIME IN ms);
/*
setTimeout is api
it is not part of javascript language 
set timeout returns an unique identifier by which we can identify the individual set timeout
to stop the execution of setTimeout we have clearTimeout() method, in which the unique id of setTimeout
*/
/*// todo NOTE:
    setTimeout runs only once when the timer expires
*/

// ? setInterval()
// SYNTAX: setInterval(CALLBACK_FUNCTION, TIME IN ms);
/*
setInterval is api
it is not part of javascript language 
setInterval ececutes after some delay infinitely
to stop setInterval we have clearInterval() method which acepts unique id returned by setInterval
*/
/*// todo NOTE:
    setTimeout runs again and again when the timer expires
*/

// ? Promise
/*
the promise object reppresent eventual completion(or failure) of asynchronous operation and its resulting value.
also called Proxy for a value not necessarily known when the promise is created.
It allows you to associate handlers with anssynchronous action's eventual success value or failure reason.
This lets asynchronous methods return values like synchronous methods:
instead of immediately returning the final value, asynchronous method returns a promise to supply the value at some point in the future.
*/
// ? Stages of promise
/*
promise has three stages 
    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the oeration was complered successfully
    rejected: meaning that the oeration was failed

* if promise is in pending state we refer it as Unsettled promise
* if promise is either fulfilled or rejected we refer it as Settled promise
*/
// ? Promise handler methods
/*
    then()
    catch()
    finally()
? then()
    it only runs when promise is fulfilled
    then() accepts one callback function in which first parameter is the Value returned by the promise
? catch()
    it only runs when promise is rejected
    it accepts one callback function as a parameter in which first parameter is the Error or Reason returned by the promise
? finally(
    this method runs only when promise is Settled(either fulfilled or rejected)
    it accepts one callback function
)
*/
// ? callback Hell
/*
the phonomenon which happens when we nest multiple callbacks whithin a function is called a callback hell.
the shape of the returning code structure resembles a pyramid and hence callback hell is also called "The Pyramid of Doom"
it makes the code very difficult to understand and maintain
*/
// ? SYNTAX
//   Promise((resolve, rejected)=>{})
let bharti = new Promise((resolve, rejected)=>{
    let she = "no";
    if (she === "Yes") {
        resolve(console.log("inside resolve - Bharat fall in love. Bharat we want party."));
    }
    else{
        rejected(console.log("inside rejected - we all are happy (only single ones)"));
    }
})
.then(()=>{
    console.log("inside then - yes : fullfilled ");
})
.catch(()=>{
    console.log("inside catch - no : rejected");
})
.finally(()=>{
    console.log("inside final - she replied");
});

// console.log(bharti);

setTimeout(()=>{
    console.log(bharti);
},3000);

/* NOTE: 
 * if promise and setTimeout are executed at same time 
 * promise will execute first
 * then setTimeout will execute.
*/