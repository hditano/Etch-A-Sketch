const mainContainer = document.querySelector('.grid-container');
let gridSizeX = 20;
let gridSizeY = 20;

for(let i = 0; i < gridSizeX; i++) {
  const newGridX = document.createElement('div');
  newGridX.innerHTML = "<div class='grid-unit'>1</div>";
  mainContainer.appendChild(newGridX);
  for(let j = 0; j < gridSizeY; j++ ) {
    const newGridY = document.createElement('div');
    newGridY.innerHTML = "<div class='grid-unit'>1</div>";
    newGridX.appendChild(newGridY);
  }
}