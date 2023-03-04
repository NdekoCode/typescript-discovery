let i: number = 0;

const compter = document.querySelector<HTMLButtonElement>('#compter');

const increment = (e: MouseEvent) => {
    i++;
    const span = compter?.querySelector('span') as HTMLSpanElement | HTMLDivElement;
    if (span) {
        span.innerText = i.toString();
    }
}
compter?.addEventListener('click', increment);