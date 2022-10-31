function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const textColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', makeChangeColor);

function makeChangeColor(event) {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  textColor.textContent = getRandomHexColor();
}
