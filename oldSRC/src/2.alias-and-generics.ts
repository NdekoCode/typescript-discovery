// ALIAS ==> STRUCTURE : type + nameOfType = DescriptionOfType
type User = { firstName: string, lastName: string, email: string, password: string, [ key: string ]: string }
type DateString = string;
type Id = number | string;
// ALIAS+NAME<GENERIC> ==> STRUCTURE : type + nameOfType<nameOfGenerics> = DescriptionOfGenericType
type Identity<ArgType> = (arg: ArgType) => ArgType

// Using Alias: nameOfVariable:NameOfTypeDefined = ValueOfVariable
const user: User = { email: "", password: "", firstName: '', lastName: "" };


const genericArray: Array<string | number> = [ "Lol", "Learn", 3 ];

// Generic on function definition which retourn the type of arg params
function identity<ArgType>(args: ArgType): ArgType {
    return args;
}
function firstIndice<Type>(arg: Type[]): Type {
    return arg[ 0 ];
}
// Add a contrain to a Generic: l'argument doit avoir obligatoirement un attribut length
function consoleSize<Type extends { length: number }>(arg: Type): Type {
    console.log(arg.length);
    return arg;
}
// tab type:String: Dynamic par rapport à ce que on lui passe en argument
const abb = consoleSize("Apprendre");
// tab type:String: Dynamic par rapport à ce que on lui passe en argument
const tab = firstIndice([ "Bum", "Mub", "ubM" ]);

// Dynamic par rapport à ce que on lui passe en argument
const varIdentity = identity("Hello");