function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", getNumberBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function getNumberBoxes() {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {    
  const boxesEl = [];
  for (let i = 0; i < amount; i += 1) {
    let size = 30 + i * 10;
    const divEl = document.createElement("div");
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;      
    divEl.style.backgroundColor = `${getRandomHexColor()}`;
    boxesEl.push(divEl);
  }  
  boxes.append(...boxesEl);  
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

