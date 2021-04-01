const grid = document.querySelector(".grid-container");
const container = document.querySelector(".container");
const gridUnit = document.querySelector(".grid-unit");
const clearBtn = document.querySelector(".clear-btn");
let gridSize = 20;

// if(gridSizeX <= 57 && gridSizeY <= 40) {
// for(let i = 0; i < gridSizeX; i++) {
//   const newGridX = document.createElement('div');
//   newGridX.innerHTML = "<div class='grid-unit'></div>";
//   mainContainer.appendChild(newGridX);
//   for(let j = 1; j < gridSizeY; j++ ) {
//     const newGridY = document.createElement('div');
//     newGridY.innerHTML = "<div class='grid-unit'></div>";
//     newGridX.appendChild(newGridY);
//   }
// }
// };

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
  }
}

function createDiv(size) {
  const div = document.createElement("div");
  div.classList.add("grid-unit");
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

clearBtn.addEventListener("click", clearGrid);

function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  createGrid(gridSize);
}

container.addEventListener("mouseover", function (e) {
  if (e.target.matches(".grid-unit")) {
    e.target.classList.add("grid-unit-fill");
    console.log(e.target);
  }
});

createGrid(gridSize);