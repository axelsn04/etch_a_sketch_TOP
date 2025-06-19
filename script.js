const container = document.querySelector('.grid-container');

for (let i = 0; i < 256; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    });
}

const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = 'white';
    });
});

const resizeButton = document.querySelector('#resize');

function createGrid(size) {
  container.innerHTML = ''; // borra todo
  const boxSize = 500 / size;

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = 'black';
    });
    container.appendChild(box);
  }
}

// botón que pide input y genera el grid
resizeButton.addEventListener('click', () => {
  const input = prompt("Enter number of squares per side (max 100):");
  const size = parseInt(input);
  if (size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

// crea un grid por defecto
createGrid(16);