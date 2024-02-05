let Mydiv=document.querySelector("div");
let Fun=setInterval(function(){
Mydiv.innerHTML-=1;
    if(Mydiv.innerHTML==="0"){
    window.location.assign("https://elzero.org/");
    }
},1000);
