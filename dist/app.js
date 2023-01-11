"use strict";
let i = 0;
const compter = document.getElementById("compter");
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
