let body = document.body;
body.style.background = "#d62fb1"
body.style.margin ="0";
body.style.fontFamily ="sans-serif";
body.style.fontSize =".9rem";

let uperbar = document.getElementById("uperbar");
// console.log(uperbar);
uperbar.style.height = "3.4rem";
uperbar.style.backgroundColor = "#1d75de";
uperbar.style.display = "flex";
uperbar.style.justifyContent="space-between";
uperbar.style.alignItems = "center";
uperbar.style.color = "white";
uperbar.style.padding = "0 12rem 0 12rem";
uperbar.style.fontSize = ".8rem";

let navbar = document.getElementById("navbar");
// console.log(navbar);
navbar.style.backgroundColor="black";
navbar.style.height="5rem";
navbar.style.display="flex";
navbar.style.fontWeight="bold";
navbar.style.justifyContent="space-between";
navbar.style.alignItems = "center";
navbar.style.padding = "0 11rem 0 12rem";

let name_div = document.querySelector("#navbar div");
name_div.style.display ="flex";
name_div.style.justifyContent ="space-around";
name_div.style.alignItems ="center";

let logo = document.querySelector("#navbar div img");
logo.style.height = "2.5rem";
logo.style.padding = "0 .2rem";

let span1 = document.querySelector("#navbar div span").style;
span1.color = "white";
span1.fontSize = "1.5rem";

let ul = document.querySelector("#navbar ul").style;
ul.width = "45%";
ul.color = "white";
ul.display = "flex";
ul.justifyContent = "space-around";
let li = document.querySelectorAll("#navbar ul li");
li.forEach(element => {
    element.style.listStyleType = "none";
});
let li_hover = document.querySelectorAll("#navbar ul li:hover");
// console.log(li_hover);
li_hover.forEach(element => {
    element.style.color = "green";
});
let table = document.createElement("table");
body.appendChild(table);
let tr = document.createElement("tr");
table.appendChild(tr);

// ! FORMS
// ? document.forms
// ? it will return html collection of form in wevpage
// ? indide thid , we have "elements" property by which we can targer imput fields using their "name"
// console.log(document.forms);

// ? document.forms[index]
// ? it will return form of that index from html collection of forms
// console.log(document.forms[0]);

// ? document.forms[index][index2]
// ? it will return that index2 element from that form of that index from html collection of forms
// console.log(document.forms[0][0]);

// ? document.forms[0].elements
// ? it will return collection of element with that input field name from form at 0 index from html collection of form
// console.log(document.forms[0].elements);

// ? document.forms[0].elements.input_feild_name
// ? it will return element with that input field name from form at 0 index from html collection of form
// console.log(document.forms[0].elements.username);

// ? document.forms[0].elements.input_feild_name.value
// ? it will return value of the element with that input field name from form at 0 index from html collection of form
// console.log(document.forms[0].elements.username.value);

// ? document.forms[0].children
// ? it will return html collection of childern of form at 0 index from html collection of form
// console.log(document.forms[0].children);

// ? document.forms[0].children[index]
// ? it will return that index childern of form at 0 index from html collection of form
// console.log(document.forms[0].children[3]);

// ? document.forms[0].children[index].textContent
// ? it will return that index childern of form at 0 index from html collection of form
// console.log(document.forms[0].children[3].textContent);

// ! EVENTS
// ? javascript events
/*
action perfomed by user on browser is called events
whenever event is occured browser creates an object where all imformation is stored about the event occured
the object created by browser when event occured on browser is called an event object
this event object is passed to event handlers
event handlers are the mehtod which get triggered when event occurs on browser
we can specify the type of event for which event handler should be called.
*/
// ? types of events
/*
* Event Performed   Event Handler   Description
-----------------------------------------------------
todo MOUSE EVENT
* click             onclick         
* mouseover         onmouseover     
* mouseout          onmouseout      
* mousedown         onmousedown     
* mouseup           onmouseup       
* mousemove         onmousemove     
todo KEYBOARD EVENT
* Keydown           onkeydown       
* Keyup             onkeyup         
todo FORM EVENT
* focus             onfocus         
* submit            onsubmit        
* blur              onblur          
* change            onchange        
todo DOCUMENT EVENT
* load              onload          when browser finishes loading page
* unload            onunload        when user leaves current page
* resize            onresize        
*/
// ? event handlers
/*
event handlers ate the funtions in js that are called in response to a specific event such as user clicking a button or user pressing keyboard key
*/
// ? steps to add event handlers
/*
1. first attach 
*/
// ? 3 ways to add event handlers
/*
1. by using html attribute
2. by using js property
3. by using event listner methods
*/
// ? 1 HTML attribute
/*
we hvave to add "on" before event name
click -> onclick
double click -> ondblclick //* but may not supported in all browser
*/
let p = document.createElement("p");
p.textContent="hi suranjan how are you";
body.appendChild(p);
function color1() {
    document.querySelector("p").style.backgroundColor = "#1d75de";
}
function color2() {
    document.querySelector("p").style.backgroundColor = "blue";
}
// ? 2 JS property
/*
we have to add "on" before event name
click -> onclick
double click -> ondblclick
*/
p.onclick = color1;
p.ondblclick = color2;

// ? 3 EVENT LISTNER method
/*
we have to add "on" before event name
click -> onclick
double click -> ondblclick
*/