let i: number = 0;
type User = { email: string, password: string, fistName: string, lastName: string, [ key: string ]: string }
const user: User = { email: "#compter", password: "", fistName: '', lastName: "" }
const compter = <HTMLButtonElement>document.querySelector('#compter')
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