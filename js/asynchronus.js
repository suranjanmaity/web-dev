console.log("Starting");
var a = 10;
console.log("a");

// ! setTimeout(callback,time) API

setTimeout(()=>{
    console.log("i'am asynchronous code");
},5000);
var b = 11;
console.log("b");
console.log("end");

// ? Asynchronous programming is a technique in JavaScript that enables your program to start a potentially long running task and still be able to be responsive to other events.while that task runs rather than having to wait untill that task has finished.Once that task has finished your program is presented with the result.
/*
Asynchronous javascript is programming technique that
so that time taking code will not block synchronous code
to use asynchronous javascript we use 
event loop,
callback queue,
mirotask queue and
web api area(heap area)
*/