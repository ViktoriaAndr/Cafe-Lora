import '../Layer/style.css';

export const Layer = (props) => {
  const { color, label } = props;

  return `
  <div class="layer">
    <div
      class="layer__color"s
      style="background-color: ${color}"
    ></div>
    <div class="layer__label">${label}</div>
  </div>`;
};
