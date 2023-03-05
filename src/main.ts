import { setupCounter } from './counter';
import './style.css';

let myType = 1;
myType = 2;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ` <div> 
<div class="card">
  <button id="counter" type="button"></button>
</div>  ${myType}</div> `;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
