let Mydiv=document.querySelector("div");
let Fun=setInterval(function(){
Mydiv.innerHTML-=1;
    if(Mydiv.innerHTML==="5"){
    // clearInterval(fun);
    window.open("https://elzero.org/","_blank","height=500,width=500,left=300,top=100");
    }
    else if(Mydiv.innerHTML==="0"){
    clearInterval(Fun);
    }
},1000);


