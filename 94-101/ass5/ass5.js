let first=document.querySelector("div");
let Sec=document.querySelector("span");
let third=document.querySelector("p");
let fourth=document.querySelector("article");
let fiv=document.querySelector("section");
document.body.addEventListener("click", (e) => {
    if(e.target===first){
console.log("This is div");
    }
    else if(e.target===Sec){
        console.log("This is span");
    }
    else if(e.target===third){
        console.log("This is para");
    }
    else if(e.target===fourth){
        console.log("This is article");
    }
    else{
        console.log("This is section");
    }
});

//another sol
//   document.body.onclick=function(e) {
//     if(e.target.nodeName!="BODY"){
//       console.log(`this is ${e.target.nodeName.toLowerCase()}`)  
//     }
//   };
