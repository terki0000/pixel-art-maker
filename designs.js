function makeGrid() {
  //script variables
  const gridHeight = document.getElementById('inputHeight').value;
  const gridWidth = document.getElementById('inputWidth').value;
  const table = document.getElementById('pixelCanvas');
// Clearing squares
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
// table loops
  for (t = 0; t < gridHeight; t++) {
    const ro = document.createElement('tr');
    table.appendChild(ro);
    for (d = 0; d < gridWidth; d ++) {
      const co = document.createElement('td');
      ro.appendChild(co);
      // Add "click event listner" to table
      table.addEventListener('click', function(ev) {

          // When the squares are clicked, Change the background color to the selected color
		if (ev.target.nodeName == "TD"){
          ev.target.style.backgroundColor = document.getElementById('colorPicker').value;
}      });
    }
  }
}

// Add Event Listener to the submit button
document.getElementById('sizePicker').addEventListener('submit', function(event) {
  event.preventDefault();
// When submiting size, call makeGrid
  makeGrid();
});
