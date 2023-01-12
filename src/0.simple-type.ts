// TYPES 
const a: string = "Hello world";
const n: number = 0;
const b: boolean = false;
const d: null = null;
const arr: string[] = [ 'lol', 'Bum' ];
const userObject: { username: string, firstname: string, lastname: string, [ key: string ]: string } = { username: '', firstname: "", lastname: '' };
const username: object[] = [];
const date: Date = new Date();
const cb: (e: MouseEvent) => void = (e: MouseEvent): void => {
    console.log(e);
}
// Union type
function printIt(id: number | string) {
    console.log(id)
}