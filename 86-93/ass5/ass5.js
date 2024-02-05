let images=document.querySelectorAll(".theImg");
for(let i=0; i<=5;i++){
   if(images[i].hasAttribute("alt")){
      images[i].getAttribute("alt");
      images[i].setAttribute("alt"," Elzero New");
      }
      else{
      images[i].setAttribute("alt","old");
      }
   }




