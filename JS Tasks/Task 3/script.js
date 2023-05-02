/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const showUsers = document.getElementById('btn');
const outPut = document.getElementById('output');

const users = async () => {
  try {
    const responce = await fetch(ENDPOINT);
    const data = await responce.json();
    renderUserList(data);
  } catch (err) {
    console.log(err);
  }
};

const renderUserList = (array) => {
  array.forEach((user) => {
    showUsers.addEventListener('click', function (e) {
      e.preventDefault();
      const cartContainer = document.createElement('div');
      cartContainer.classList.add('cart-container');

      const login = document.createElement('p');
      login.classList.add('login-p');
      login.textContent = user.login;

      const avatar = document.createElement('img');
      avatar.classList.add('img');
      avatar.src = user.avatar_url;

      cartContainer.append(avatar, login);

      outPut.append(cartContainer);

      const message = document.getElementById('message');
      message.style.display = 'none';
    });
  });
};

users();
