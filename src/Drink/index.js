import './style.css';
import { Layer } from '../Layer';

export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;
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
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>
</div>
`;
  const drinkinfoElm = drinkElm.querySelector('.drink__info');
  for (let i = 0; i < layers.length; i++) {
    drinkinfoElm.innerHTML += Layer(layers[i]);
  }
  return drinkElm;
};
