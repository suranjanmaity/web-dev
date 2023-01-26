let span = document.querySelector(".heading").children;
console.log(span);
let open = span[1];
let close = span[2];
let detail = document.querySelector(".detail");
close.style.display = "none";
detail.style.display = "none";
function hide(){
    open.style.display = "block";
    detail.style.display = "none";
    close.style.display = "none";
}
close.addEventListener("click", hide);

function show(){
    close.style.display = "block";
    detail.style.display = "block";
    open.style.display = "none";
}
open.addEventListener("click", show);