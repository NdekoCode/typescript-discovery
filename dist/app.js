"use strict";
let i = 0;
const compter = document.querySelector('#compter');
const increment = (e) => {
    i++;
    const span = compter?.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compter?.addEventListener('click', increment);
