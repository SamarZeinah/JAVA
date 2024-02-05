let elementp=document.querySelector("p");
elementp.remove();

let our_element=document.querySelector(".our-element");
//befor
let befor_element=document.createElement("div");
befor_element.className="new1";
befor_element.setAttribute("title","first div");
befor_element.setAttribute("data_value","start")
befor_element.innerHTML="first item";
our_element.before(befor_element);

//after
let after_element=document.createElement("div");
after_element.className="new2";
after_element.setAttribute("title","sec div");
after_element.setAttribute("data_value","End");
after_element.innerHTML="sec item";
our_element.after(after_element);


