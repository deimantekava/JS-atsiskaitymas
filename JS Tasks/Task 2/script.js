/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const btn = document.getElementById('btn__element');
btn.onclick = Counter;
const clicks = document.getElementById('btn__state');

var a = 0;

function Counter() {
  a += 1;
  clicks.innerHTML = a;
}
