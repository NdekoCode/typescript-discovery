type User = { email: string, password: string, fistName: string, lastName: string, [ key: string ]: string }
type DateString = string;
type Id = number | string;
type identity<ArgType> = (arg: ArgType) => ArgType

const user: User = { email: "", password: "", fistName: '', lastName: "" };
const genericArray: Array<string | number> = [ "Lol", "Learn", 3 ];


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