/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const searchForm = document.querySelector('form');
const outputForm = document.getElementById('output');

if (searchForm) {
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const searchInput = document.getElementById('search');

    const svarai = searchInput.value * 2.2046;
    const gramai = searchInput.value / 0.001;
    const uncijos = searchInput.value * 35.274;

    const message = `Svarai: ${svarai} lb, Gramai: ${gramai} g, Uncijos: ${uncijos} oz`;

    outputForm.textContent = message;
  });
}
