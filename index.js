let buttons = document.getElementsByTagName("button");
buttons[0].addEventListener("click", ()=>{
    let num = prompt("enter any number to check palindrom.",0)
    let arr = num.split("");
    if(arr.toString()===arr.reverse().toString()){
        alert(`The ${num} is palindrom`);
    }
    else{
        alert(`The ${num} is not palindrom`)
    }
}
);
buttons[1].addEventListener("click", ()=>{
    let num = prompt("enter any number to check armstrong.",0)
    let arr = num.split("");
    let sum = 0;
    arr.map((value)=>{
        let digit = parseInt(value);
        sum = sum + (digit*digit*digit);
    })
    if (sum===parseInt(num)) {
        alert(`The ${num} is armstrong`);
    }
    else{
        alert(`The ${num} is not armstrong`)
    }
}
);
//! reverse
buttons[2].addEventListener("click", ()=>{
    let num = prompt("enter any number to reverse it.",0);
    console.log();
    let arr = num.split("");
    let rev = "";
    arr.map((value)=>{
        rev = value + rev ;
    })
    alert(`Reverse of ${num} is ${rev}`)
}
);
//! factorial
let factorial = (num) => {
    let fact=1;
    for(let i=2; i<=num; i++){
        fact=fact*i;
    }
    return fact;
};
// ! strong number
buttons[3].addEventListener("click", ()=>{
    let num = prompt("enter any number to reverse it.",0);
    let arr = num.split("");
    let sum = 0;
    arr.map((value)=>{
        sum=sum+factorial( parseInt( value ) );
    })
    if (sum===parseInt(num)) {
        alert(num+" is strong");
    } else {
        alert(num+" is not strong");
    }
    // 145 = 1 + 4! + 5!
    // 1!               =   1
    // 4! = 4*3*2*1     =  24
    // 4! = 5*4*3*2*1   = 120
    //                  = 145
}
);
//! pattern
// *
// **
// ***
// ****
buttons[4].addEventListener("click", ()=>{
    let num = parseInt( prompt("enter any number to console pattern",0) );
    for (let i = 0; i < num; i++) {
        let str="";
        for (let j = 0; j < i; j++) {
            str=str+"* ";
        }
        console.log(str);
    }
    
}
);
//! pattern
// ****
// ***
// **
// *
buttons[5].addEventListener("click", ()=>{
    let num = parseInt( prompt("enter any number to console pattern",0) );
    for (let i = num; i > 0; i--) {
        let str="";
        for (let j = 0; j < i; j++) {
            str=str+"* ";
        }
        console.log(str);
    }
    
}
);
//! pattern
// ****
//  ***
//   **
//    *
buttons[6].addEventListener("click", ()=>{
    let num = parseInt( prompt("enter any number to console pattern",0) );
    for (let i = num; i > 0; i--) {
        let str="";
        // for space
        for (let k = 0; k < num-i; k++) {
            str=str+"  ";
        }
        // for star
        for (let j = 0; j < i; j++) {
            str=str+"* ";
        }
        console.log(str);
    }
    
}
);
//! pattern
//    *
//   **
//  ***
// ****
buttons[7].addEventListener("click", ()=>{
    let num = parseInt( prompt("enter any number to console pattern",0) );
    for (let i = 1; i <= num; i++) {
        let str="";
        // for space
        for (let k = num-i ; k > 0 ; k--) {
            str=str+"  ";
        }
        // for star
        for (let j = 1; j <= i; j++) {
            str=str+"* ";
        }
        console.log(str);
    }
    
}
);
