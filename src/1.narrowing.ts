// Minimize type
function printId(id: string | number) {
    if (typeof id === "number") {
        console.log((id * 3).toString());
    } else {
        console.log(id.toUpperCase());
    }
}
// Return a typeOF and minimise type
function isDate(a: any): a is Date {
    return a instanceof Date;
}
// Union type by minimize type
function example(a: Date | HTMLInputElement) {
    if (isDate(a)) {
        return a.getTime();
    }
}