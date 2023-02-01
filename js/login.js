let form = document.forms[0];
// console.log(form);
let user = form.elements.username;
let pass = form.elements.password;
let submit = form.children[2];
let users = [];
submit.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(user.value);
    console.log(pass.value);
    users.push({usesrname: user, password: pass});
    console.log(users);
});