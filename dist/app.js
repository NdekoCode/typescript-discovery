"use strict";
let i = 0;
const students = ["Abel", "Cedric", "Gloire"];
const cb = function (e) { };
function printId(id) {
    console.log(id.toString());
}
const user = {
    firstName: "Arick",
    username: "Ndekocode",
    email: "arickbulakali@gmail.com",
    password: "",
};
const compter = document.getElementById("compter");
const increment = () => {
    i++;
    const span = compter.querySelector("span");
    if (span) {
        span.innerText = i.toString();
    }
};
// N'Utilise addEventListener que si compter existe
compter === null || compter === void 0 ? void 0 : compter.addEventListener("click", increment);
