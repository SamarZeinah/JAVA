let text=document.querySelector(".text");
let email=document.querySelector(".email");
let tel=document.querySelector(".tel");
let color=document.querySelector(".info");


if(window.sessionStorage.getItem("ourtext")){
text.value= window.sessionStorage.getItem("ourtext");
}
if( window.sessionStorage.getItem("ouremail")){
    email.value=window.sessionStorage.getItem("ouremail");
}
if(window.sessionStorage.getItem("ourtel")){
    tel.value=window.sessionStorage.getItem("ourtel");
}
if(window.sessionStorage.getItem("ourcolor")){
    color.value=window.sessionStorage.getItem("ourcolor");
}


text.addEventListener("input",()=>{
    window.sessionStorage.setItem("ourtext",text.value)
});
email.addEventListener("input",()=>{
    window.sessionStorage.setItem("ouremail",email.value)
});
tel.addEventListener("input",()=>{
    window.sessionStorage.setItem("ourtel",tel.value)
});
color.addEventListener("input",()=>{
    window.sessionStorage.setItem("ourcolor",color.value)
});

