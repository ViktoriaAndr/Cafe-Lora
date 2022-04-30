import './style.css';
import { Layer } from '../Layer';

export const Drink = (props) => {
  const { id, name, image, layers } = props;
  let { ordered } = props;
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');
  drinkElm.innerHTML = `
  <div class="drink__product">
    <div class="drink__cup">
      <img
        src="${image}"
      />
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
      </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
</div>
`;
  const drinkinfoElm = drinkElm.querySelector('.drink__info');
  for (let i = 0; i < layers.length; i++) {
    drinkinfoElm.innerHTML += Layer(layers[i]);
  }
  const orderBtn = drinkElm.querySelector('.order-btn');

  const drinkSelect = drinkElm.querySelector('.drink__cup');

  const drink = () => {
    const selected = drinkSelect.classList.toggle('drink__cup--selected');
    orderBtn.textContent = selected ? 'Zrušit' : 'Objednat';
  };

  orderBtn.addEventListener('click', drink);
  return drinkElm;
};
