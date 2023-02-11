// class is function only
// class is syntax sugar of function.
// to declare a class , we have to use 'class' keyword
// ? ex: class humam
// here, human is variable, which holds the reference of class(function)
class Human{
    // constructor function
    constructor(name){
        this.name = name;
    }
    // it is a special method
    // which returns nothing
    // it is called automatically, when new object is created
    // it is used to initialize the data members of class
    // ! private -> we have to add '#' before member
    // it cannot be accessed outside of class and cannot be inherited
    // but it is not supported by all browsers
    #hello(){
        console.log("private hello!");
        return true;
    };

    // ! protected -> we have to add '_' before member
    // can be accessed by child
    // we can access from outside
    // '_' it sis warning for developers, that you should not access of class or outside child
    _hello(){
        console.log("protected hello!");
        return true;
    };
}
let human = new Human("chombi");
console.log(human);
console.log(human._hello());
// console.log(human.#hello()); // will give error message