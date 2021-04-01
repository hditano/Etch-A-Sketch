// Variables

const grid = document.querySelector(".grid-container");
const container = document.querySelector(".container");
const gridUnit = document.querySelector(".grid-unit");
const clearBtn = document.querySelector(".clear-btn");
const rangeBtn = document.querySelector('.range-btn');
const submitBtn = document.querySelector('.range-submit');
let gridSize = 20;

//Create Grid Function

function createGrid(gridSize) {
  if(gridSize >= 101) return false;
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
  }
}

// Create Div Function.

function createDiv(size) {
  const div = document.createElement("div");
  div.classList.add("grid-unit");
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

//Clear Grid function, that keeps whatever was passed as the last gridSize 

function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  createGrid(gridSize);
}

// Would read whatever is typed in the input text, to pass it as gridSize.
function rangeRead() {
  gridSize = rangeBtn.value;
  clearGrid(gridSize);
}

// Event Listeners

clearBtn.addEventListener("click", clearGrid);

submitBtn.addEventListener('click', rangeRead);

container.addEventListener("mouseover", function (e) {
  if (e.target.matches(".grid-unit")) {
    e.target.classList.add("grid-unit-fill");
  }
});

// Main Funcion Start
createGrid(gridSize);