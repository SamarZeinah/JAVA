
let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experment");

if (window.localStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
lis.forEach((li) => {
    li.classList.remove("active");
});
  // [3] Add Active Class To Current Color
document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}
    lis.forEach((li) => {
    li.classList.remove("active");
    });
    // [3] Add Active Class To Current Color
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");


lis.forEach((li) => {
    li.addEventListener("click", (e)=> {
        lis.forEach((li) => {
li.classList.remove("active");
        });
        e.currentTarget.add("active");
        window.localStorage.setItem("color",e.currentTarget.dataset.color);
        exp.style.backgroundColor = e.currentTarget.dataset.color;  
    });
});