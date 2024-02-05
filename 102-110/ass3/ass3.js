// first sol
// let mydiv=document.createElement("div");
// let fun=setInterval(function(){
// mydiv.innerHTML=10;
// for(let i=mydiv.innerHTML;i>=0;i--){
//     document.write(i);
//     if(i===0){
//         clearInterval(fun);
//     }
// }
// },0);
// sec sol
let Mydiv=document.querySelector("div");
let Fun=setInterval(function(){
Mydiv.innerHTML-=1;
    if(Mydiv.innerHTML==="0"){
        clearInterval(Fun);
    }
},1000);