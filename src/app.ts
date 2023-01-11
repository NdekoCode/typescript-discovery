let i: number = 0;
const students: string[] = [ "Abel", "Cedric", "Gloire" ];
const cb: (e: MouseEvent) => void = function (e) { }
function printId(id: number | string): void {
    console.log(id.toString())
}
const user: {
    username: string;
    email: string;
    password: string;
    firstName: string;
    [ key: string ]: string;
} = {
    firstName: "Arick",
    username: "Ndekocode",
    email: "arickbulakali@gmail.com",
    password: "",
};
const compter = document.getElementById("compter") as HTMLButtonElement;
const increment: (e: Event) => void = () => {
    i++;
    const span = <HTMLSpanElement>compter.querySelector("span");
    if (span) {

        span.innerText = i.toString();
    }
};
// N'Utilise addEventListener que si compter existe
compter?.addEventListener("click", increment);
