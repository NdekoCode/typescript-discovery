type TypeItem = [ string, number ];
function test(arg: unknown) {
    if (arg instanceof HTMLInputElement) {
        arg.value = (3).toString();
    }
}
const obj = {
    isPrivate: true,
    isPublic: false,
} as const;

const a: TypeItem = [ "Tomate", 3 ];
const b: TypeItem = [ "Banane", 7 ];
function merge<T extends unknown[], U extends unknown[]>(a: T, b: U): [ ...T, ...U ] {
    return [ ...a, ...b ];

}
const c = merge(a, b);