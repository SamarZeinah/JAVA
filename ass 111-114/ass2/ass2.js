let theName = document.querySelector(".name");
let theEmail = document.querySelector(".email");
let theNumber = document.querySelector(".number");
let colors = document.querySelector(".colors");
if ((window.sessionStorage = window.sessionStorage.getItem("autoSave-Name"))) {
theName.value = window.sessionStorage.getItem("autoSave-Name", theName.value);
}
if ((window.sessionStorage = window.sessionStorage.getItem("autoSave-Email"))) {
theEmail.value = window.sessionStorage.getItem(
"autoSave-Email",
theEmail.value
);
}
if (
(window.sessionStorage = window.sessionStorage.getItem("autoSave-Number"))
) {
theNumber.value = window.sessionStorage.getItem(
"autoSave-Number",
theNumber.value
);
}
if ((window.sessionStorage = window.sessionStorage.getItem("color"))) {
colors.value = window.sessionStorage.getItem("color", colors.value);
}
theName.addEventListener("input", () => {
window.sessionStorage.setItem("autoSave-Name", theName.value);
});
theEmail.addEventListener("input", () => {
window.sessionStorage.setItem("autoSave-Email", theEmail.value);
});
theNumber.addEventListener("input", () => {
window.sessionStorage.setItem("autoSave-Number", theNumber.value);
});
colors.onchange = () => {
window.sessionStorage.setItem("color", colors.value);
};
