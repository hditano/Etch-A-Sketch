const mainContainer = document.querySelector('.grid-container');
let gridSizeX = 57;
let gridSizeY = 30;

if(gridSizeX <= 57 && gridSizeY <= 30) {
for(let i = 0; i < gridSizeX; i++) {
  const newGridX = document.createElement('div');
  newGridX.innerHTML = "<div class='grid-unit'></div>";
  mainContainer.appendChild(newGridX);
  for(let j = 1; j < gridSizeY; j++ ) {
    const newGridY = document.createElement('div');
    newGridY.innerHTML = "<div class='grid-unit'></div>";
    newGridX.appendChild(newGridY);
  }
}
};