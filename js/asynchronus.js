console.log("Starting");
var a = 10;
a += 1;
console.log("a");

// ! setTimeout(callback,time) API

setTimeout(()=>{
    console.log("i'am asynchronous code");
},5000);
console.log("a");
console.log("end");


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

