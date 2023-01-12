type User = { email: string, password: string, fistName: string, lastName: string, [ key: string ]: string }
type DateString = string;
type Id = number | string;
type identity<ArgType> = (arg: ArgType) => ArgType
const user: User = { email: "", password: "", fistName: '', lastName: "" };
let i: number = 0;

const compter = document.querySelector<HTMLButtonElement>('#compter');
const genericArray: Array<string | number> = [ "Lol", "Learn", 3 ];
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

function identity<ArgType>(args: ArgType): ArgType {
    return args;
}
function firstIndice<Type>(arg: Type[]): Type {
    return arg[ 0 ];
}

function consoleSize<Type extends { length: number }>(arg: Type): Type {
    console.log(arg.length);
    return arg;
}
const abb = consoleSize("Apprendre");
const tab = firstIndice([ "Bum", "Mub", "ubM" ])
const varIdentity = identity("Hello");