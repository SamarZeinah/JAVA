let numberInput = document.querySelector("[type = 'number']");
let textInput = document.querySelector("[type = 'text']");
let select = document.querySelector("select");
let creatBtn = document.querySelector("[value= 'Create']");
let resultsBox = document.querySelector(".results");
creatBtn.onclick = (event) => {
event.preventDefault();
resultsBox.innerHTML = "";
for (i = 1; i <= numberInput.value; i++) {
let element = document.createElement(select.value);
element.className = "box";
element.setAttribute("title", "Element");
element.setAttribute("id", `id-${i + 1}`);
element.appendChild(document.createTextNode(textInput.value));
resultsBox.appendChild(element);
}
};

    
    