import './style.css';
import { Layer } from './Layer/index.js';
import { Drink } from './Drink';

// const layers = [
//   {
//     color: '#feeeca',
//     label: 'mléčná pěna',
//   },
//   {
//     color: '#fed7b0',
//     label: 'teplé mléko',
//   },
//   {
//     color: '#613916',
//     label: 'espresso',
//   },
// ];

// const drinkinfoElm = document.querySelector('.drink__info');
// for (let i = 0; i < layers.length; i++) {
//   drinkinfoElm.innerHTML += Layer(layers[i]);
// }

const drinkExample = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'banan',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
  image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
};

const newdrinkElm = Drink(drinkExample);
const drinkslistElm = document.querySelector('.drinks-list');
drinkslistElm.appendChild(newdrinkElm);

const dropDown = document.querySelector('nav');

const toggleNav = () => {
  dropDown.classList.toggle('nav-closed');
};

const hamburger = document.querySelector('#nav-btn');

hamburger.addEventListener('click', toggleNav);

const closeNav = () => {
  dropDown.classList.add('nav-closed');
};

const linkList = document.querySelectorAll('a');

for (let i = 0; i < linkList.length; i++) {
  linkList[i].addEventListener('click', closeNav);
}

// const orderBtn = document.querySelector('.order-btn');

// const drinkSelect = document.querySelector('.drink__cup');

// const drink = () => {
//   const selected = drinkSelect.classList.toggle('drink__cup--selected');
//   orderBtn.textContent = selected ? 'Zrušit' : 'Objednat';
// };

// orderBtn.addEventListener('click', drink);
