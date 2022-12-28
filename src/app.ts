let i:number = 0;
const compter =<HTMLButtonElement> document.querySelector('#compter');
const increment:(e:Event)=>void = (e) =>{
    i++;
    const span = <HTMLSpanElement>compter.querySelector('span');
    if(span) {
        span.innerText = i.toString();
    }
}
compter.addEventListener('click',increment);