let i: number = 0;
const compter = <HTMLButtonElement>document.getElementById("compter");
const increment: (e: Event) => void = (e) => {
    i++;
    const span = compter?.querySelector('span') as HTMLSpanElement;
    if (span) {
        span.innerText = i.toString();
    }
}
compter?.addEventListener("click", increment);