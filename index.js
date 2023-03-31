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
buttons[3].addEventListener("click", ()=>{
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

// ...rest = [1,2,3,4]

// num = [0, ...spread]