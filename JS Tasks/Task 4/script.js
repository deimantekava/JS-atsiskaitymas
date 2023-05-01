/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const outPut = document.getElementById('output');

const cars = async () => {
  try {
    const responce = await fetch(ENDPOINT);
    const data = await responce.json();
    renderCarList(data);
  } catch (err) {
    console.log(err);
  }
};

const renderCarList = (array) => {
  array.forEach((car) => {
    const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart-container');

    const brand = document.createElement('div');
    brand.classList.add('brand-class');
    brand.textContent = car.brand;

    const model = document.createElement('div');
    model.classList.add('model-class');
    model.textContent = car.models;

    cartContainer.append(brand, model);
    outPut.append(cartContainer);
  });
};

cars();
