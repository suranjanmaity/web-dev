// ? Exception
/*
an exception is an event, which occurs durring the execution of a program, that disrupts the normal flow of the program's instructions
*/

// ! Exception Handling
/*
the process of responding to unwanted or unexpected events when a computer program runs.
exception handling deals with these events to avoid the program or system crashing and without this process, exceptions would disrupt the normal operation of a program.
*/
// ? Keywords to handle errors
/*
we have four keywords to handle errors 
    * try
        statements will test a block of code for errors
    * catch
        statements will handle errors
    * throw
        statements lets you create custom errors
    * finally
        statements will execute after try and catch
*/
// example:
console.log("starting");
var a = 10;
try{
    // console.log(Infinity/Infinity);
    throw new Error("'you dummy' courses");
}
catch(error){
    console.log(error);
}
finally{
    console.log("i'm finnaly");
}

console.log("end");