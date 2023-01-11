let i: number = 0;
const compter = <HTMLButtonElement>document.getElementById("compter");
const increment: (e: Event) => void = (e) => {
    i++;
    const span = compter?.querySelector('span') as HTMLSpanElement;
    if (span) {
        span.innerText = i.toString();
    }
}
function printId(id: string | number) {
    if (typeof id === "number") {
        console.log((id * 3).toString());
    } else {
        console.log(id.toUpperCase());
    }
}
function isDate(a: any): a is Date {
    return a instanceof Date;
}
function example(a: Date | HTMLInputElement) {
    if (isDate(a)) {
        return a.getTime();
    }
}
compter?.addEventListener("click", increment);