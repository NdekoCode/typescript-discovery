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