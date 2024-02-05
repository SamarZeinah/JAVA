let fonts=document.querySelector(".FONTS");
let colors=document.querySelector(".COLORS");
let size=document.querySelector(".SIZE");



if (window.localStorage.length > 0) {
    document.body.style.fontFamily = window.localStorage.getItem("fontFamily");
    fonts.value = window.localStorage.getItem("fontFamily");
}

if(window.localStorage.length > 0) {
    document.body.style.color=window.localStorage.getItem("color");
    colors.value = window.localStorage.getItem("color");
} 

if(window.localStorage.length > 0) {
    document.body.style.fontSize = window.localStorage.getItem("fontSize") + "px";
    size.value = window.localStorage.getItem("fontSize");
}
console.log(window.localStorage.getItem("fontSize"));
    
fonts.addEventListener("change", () => {
    window.localStorage.setItem("fontFamily", fonts.value);
    document.body.style.fontFamily = fonts.value;
});


colors.addEventListener("change", () => {
    window.localStorage.setItem("color", colors.value);
    document.body.style.color = colors.value;
});

size.addEventListener("change", () => {
    window.localStorage.setItem("fontSize", size.value);
    document.body.style.fontSize = size.value + "px";
});








