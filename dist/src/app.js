"use strict";
let i = 0;
const compter = document.querySelector('#compter');
const increment = (e) => {
    i++;
    const span = compter === null || compter === void 0 ? void 0 : compter.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compter === null || compter === void 0 ? void 0 : compter.addEventListener('click', increment);
//# sourceMappingURL=app.js.map