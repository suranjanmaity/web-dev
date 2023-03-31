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

class NewHuman{
    constructor(name){
        this.name = name;
    }
    // ! Static data member
    static speak(){
        console.log(this.name);
    };
    // static data members were not accessible by instance
    // because static data members are not added to prototype of class
}
let h1 = new NewHuman("chomb");
let h2 = new NewHuman("chombi");
console.log(h1);
console.log(h2);
// console.log(h2.speak());    // will get Uncaught TypeError: h2.speak is not a function
console.log(NewHuman.speak());
// we can access static members with the help of class name

class NormalHuman{
    constructor(name){
        this.name = name;
    }
    brain(){
        console.log("brain available");
    }
    speak(){
        console.log("I'm human, My name is " + this.name);
    }
}
// ? 'extends' keyword is used to inherit from all public members from parent class
class SuperHuman extends NormalHuman{
    constructor(sname) {
        // ? 'super' keyword is used to call constructor from parent class
        super(sname);
    }
    fly(){
        console.log("i can fly");
    }
    heat(){
        console.log("heat blast");
    }
}
let superHuman = new SuperHuman("CHAMP");
superHuman.speak();
superHuman.brain();
superHuman.fly();
superHuman.heat();