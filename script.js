let container = document.querySelector('.grid');
let grid = document.querySelector('#grid');
let colorPicker = document.querySelector('#colorPicker');
let rainbowBtn = document.querySelector('#rainbow');
let blackBtn = document.querySelector('#black');
let resetBtn = document.querySelector('#reset');

let defaultGridSize = 16;
let gridAria = defaultGridSize;

// Event for user input
grid.addEventListener('change', (e) => {
  let value = e.target.value;
  if (!value) {
    gridAria = defaultGridSize;
  } else if (value > 100) {
    alert('Maximum size is 100');
    grid.value = '';
  } else {
    gridAria = value;
    resetGrid();
  }
})

// Delete grid and create a new grid layout
let resetGrid = () => {
  deleteGrid();
  createGrid();
}

// Delete grid
let deleteGrid = () => {
  container.replaceChildren();
}

// Create the grid layout
let createGrid = () => {
  for (let i = 1; i <= gridAria; i++) {
    for (let j = 1; j <= gridAria; j++) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.style.width = 100 / gridAria + '%';
      square.style.height = 100 / gridAria + '%';
      container.appendChild(square);
    }
  }

  // Set black color when page loaded
  let squares = document.querySelectorAll('.square');
  squares.forEach((sqr) => {
    sqr.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = getBlackColor();
    });
  });
}
// Start creating the grid
createGrid();

let getRandomColor = () => { return 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')' };
let getBlackColor = () => { return 'rgb(0,0,0)' };

let blackColor = getBlackColor();
// let randomColor = getRandomColor();

let selectedColor = blackColor;

// Buttons functionality
// The rainbow button event
rainbowBtn.addEventListener('click', () => {
  let squares = document.querySelectorAll('.square');
  squares.forEach((sqr) => {
    sqr.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = getRandomColor();
    });
  });
});

// The black color button event
blackBtn.addEventListener('click', () => {
  let squares = document.querySelectorAll('.square');
  squares.forEach((sqr) => {
    sqr.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = getBlackColor();
    });
  });
});

// The color picker event
colorPicker.addEventListener('change', () => {
  let squares = document.querySelectorAll('.square');
  squares.forEach((sqr) => {
    sqr.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = colorPicker.value;
    });
  });
});

// The reset button event
resetBtn.addEventListener('click', resetGrid);