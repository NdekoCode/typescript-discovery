"use strict";
const user = { email: "", password: "", fistName: '', lastName: "" };
let i = 0;
const compter = document.querySelector('#compter');
const genericArray = ["Lol", "Learn", 3];
const increment = (e) => {
    i++;
    const span = compter === null || compter === void 0 ? void 0 : compter.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
function printId(id) {
    if (typeof id === "number") {
        console.log((id * 3).toString());
    }
    else {
        console.log(id.toUpperCase());
    }
}
function isDate(a) {
    return a instanceof Date;
}
function example(a) {
    if (isDate(a)) {
        return a.getTime();
    }
}
compter === null || compter === void 0 ? void 0 : compter.addEventListener("click", increment);
function identity(args) {
    return args;
}
function firstIndice(arg) {
    return arg[0];
}
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const abb = consoleSize("Apprendre");
const tab = firstIndice(["Bum", "Mub", "ubM"]);
const varIdentity = identity("Hello");
