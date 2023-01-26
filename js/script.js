// !heading
// ?sub heading
// explanation
// TODO note
// //wrong method
// *important

//////////////////////////////////////////////////////////////////////////////////////

// * NOTEs
// !comment
//? this is that part of code which will not execute,
//? comments are only used for reading purpose

// in-line comment

/* this is a
multi line comment */

// ! data types
//? undefined
// undefined is something that is not defined yet
// eg. a variable that you didn't given a value
//? null
// null means nothing
// eg. you can set a variable to "something" and that "something" is nothing
//? boolean
// boolean means true or false
//? string
// a string is just any sort of text
//? symbol
// symbol is an immutable primitive value that is unique
// TODO we will learn about this later/below
//? number
// a number is just any number
//? object
// object can store a lot of diffrent "key and value" pair
// TODO we will learn about this later/below

// ! variable
// a variable allows a computer to store and manipulate a data in a dynamic space
// it's basically a lable to point to the data
// like a box you can fill it with the data you want
// eg. 
var myName = "maity"
myName ="suranjan"
let ourName = "freeCodeCamp or jspider"
const pi = 3.14
// ? var
// var is a type of data that can be used anywhere in the file
// ? let
// let is used in that particular block
// TODO we will learn about this later/below
// ? const
// const is used for a data that can never-change/fixed in the file
// TODO we will learn about this later/below



//////////////////////////////////////////////////////////////////////////////////////
//* auto call function
// ?this is a function that call itself at the time of initialization
// (function auto() {
//     console.log("hi there start");
// }
// )();
// object
// let obj = {
//     name:"old chombi",
//     age:23,
//     gender:"male"
// }

// object 2
// let obj2 = {
//     gender:"male",
//     age:1,
//     name:"new chombi",
// }

// function details(){
//     console.log(`name = ${this.name}`);
//     console.log(`age = ${this.age}`);
//     console.log(`gender = ${this.gender}`);
// }
// bind function
// let ref = details.bind(obj);
// let ref2 = details.bind(obj2);
// ref();
// ref2();
// ref();
// ref2();

// JSON stringify and JSON parse
// let obj_json = JSON.stringify(obj);
// console.log(obj_json)
// let obj_normal = JSON.parse(obj_json)
// console.log(obj_normal)
// console.log(obj)

// Object methods : Object.keys(obj_ref), Object.values(obj_ref), Object.entries(obj_ref)
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// object destructing
// let {name, age, gender} = obj;
// var {name, age,gender} = obj2
// console.log(name)
// console.log(age)
// console.log(gender)

let user = [
    {
      name: "A",
      age: 18,
      marital_status: "married",
      gender: "m",
    },
    {
      name: "B",
      age: 17,
      marital_status: "unmarried",
      gender: "m",
    },
    {
      name: "C",
      age: 20,
      marital_status: "married",
      gender: "f",
    },
    {
      name: "D",
      age: 38,
      marital_status: "unmarried",
      gender: "m",
    },
    {
      name: "E",
      age: 21,
      marital_status: "married",
      gender: "f",
    },
    {
      name: "F",
      age: 18,
      marital_status: "married",
      gender: "m",
    },
    {
      name: "G",
      age: 34,
      marital_status: "unmarried",
      gender: "m",
    },
    {
      name: "H",
      age: 17,
      marital_status: "married",
      gender: "m",
    },
  ];
// * JS ASSIGNMENT 2 JAN 23

//? 1. Create duplicate array (new_arr).
// let new_arr = []
// for (let prop in user) {
//         new_arr[prop] = user[prop];        
//     }
// console.log(user);
// TODO another way
// let new_arr = user;
// TODO another way
let new_arr = JSON.parse(JSON.stringify(user));
// console.log(new_arr);
//? 2. Print name and gender of unmarrieds.
new_arr = user.map(element => {
    if (element.marital_status=="unmarried") {
        console.log(element.name);
        console.log(element.age);
    }
    return element;
});
//? 3. Print name and gender of marrieds whose age is less than 18.
user.forEach(element => {
  if (element.marital_status=="married"&&element.age<18) {
    console.log(element.name);
    console.log(element.gender);
  }
});

//? 4. If age is less than 18 , then add property to the object – { eligible_for_marriage : “false” }.
new_arr = user.map(value => {
    if (value.age<18) {
          value.eligible_for_marriage = "false";
    }
  return value;
});

// 5. If age is greater than 17 , then add property to the object – { eligible_for_marriage : “true” }.
new_arr = user.map(value=>{if (value.age>17){
  value.eligible_for_marriage = "true";
}
return value;
});


// 6. In object , gender is mentioned as “m” and “f”  -> change “m” to “male” and change “f” to “female”.
new_arr = user.map(element=>{
  if (element.gender=="m") {
    element.gender = "male"
  }
  if (element.gender=="f") {
    element.gender = "female"
  }
  return element;
});


// 7. Add a function to every object such that , whenever we call the function it should print updated gender (“male” and “female”) and eligible_for_marriage and name.
new_arr = user.map(element=>{
  element.func = ()=>{
    console.log(element.gender);
    console.log(element.eligible_for_marriage);
    console.log(element.name);
  }
  return element;
});
// new_arr[1].func();

// 8. Delete object at 3rd index.
new_arr.splice(2,1);
console.log(new_arr);


// 9. Update the original array with all new properties.
user = JSON.parse(JSON.stringify(new_arr));
console.log(user);

// 10. Print the data of each object
new_arr.map(value=>{
  console.log(value);
});