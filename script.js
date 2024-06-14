let container = document.querySelector('.grid');
let grid = document.querySelector('#grid');
let colorPicker = document.querySelector('#colorPicker');
let rainbowBtn = document.querySelector('#rainbow');
let blackBtn = document.querySelector('#black');
let whiteBtn = document.querySelector('#white');
let resetBtn = document.querySelector('#reset');

let defaultGridSize = 100;
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
  colorPicker.value = 'rgb(0,0,0)';
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
let getWhiteColor = () => { return 'rgb(255,255,255)' };
let getPickerColor = () => {return colorPicker.value}

// Buttons functionality
// The reset button event
resetBtn.addEventListener('click', resetGrid);

let setColorChangeEvent = (colorFunction) => {
  let squares = document.querySelectorAll('.square');
  squares.forEach((sqr) => {
    sqr.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = colorFunction();
    });
  })
}

blackBtn.addEventListener('click', () => {
  setColorChangeEvent(getBlackColor);
})

whiteBtn.addEventListener('click', () => {
  setColorChangeEvent(getWhiteColor);
})

rainbowBtn.addEventListener('click', () => {
  setColorChangeEvent(getRandomColor);
})

rainbowBtn.addEventListener('change', () => {
  setColorChangeEvent(getPickerColor);
})