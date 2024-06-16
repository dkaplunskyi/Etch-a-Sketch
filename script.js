let container = document.querySelector('.grid');
let gridRange = document.querySelector('#gridRange');
let gridRangeOutputValue = document.querySelector('.gridRangeOutputValue');
let gridSizeInput = document.querySelector('#gridSizeInput');
let colorPicker = document.querySelector('#colorPicker');
let rainbowBtn = document.querySelector('#rainbow');
let blackBtn = document.querySelector('#black');
let whiteBtn = document.querySelector('#white');
let resetBtn = document.querySelector('#reset');

// Get user's window height length
let windowHeight = window.innerHeight;
container.style.width = `${windowHeight - 150}px`;
container.style.height = `${windowHeight - 150}px`;

// Default grid size number
let defaultGridSize = 50;
let gridAria = defaultGridSize;

// Set default grid size
function setDefaultGridSize(size) {
  gridRange.value = size;
  gridRangeOutputValue.textContent = `${size}x${size}`;
}
setDefaultGridSize(defaultGridSize);

// Grid range event
gridRange.addEventListener('input', (e) => {
  let value = e.target.value;
  gridRangeOutputValue.textContent = `${value}x${value}`;
  gridAria = value;
  resetGrid();
  gridSizeInput.value = '';

})

// Event for user input
gridSizeInput.addEventListener('change', (e) => {
  let value = e.target.value;
  if (!value) {
    gridAria = defaultGridSize;
  } else if (value > 100) {
    alert('Maximum size is 100');
    grid.value = '';
  } else {
    gridAria = value;
    gridRangeOutputValue.textContent = `${value}x${value}`;
    gridRange.value = value;
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
let getPickerColor = () => { return colorPicker.value }

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

colorPicker.addEventListener('change', () => {
  setColorChangeEvent(getPickerColor);
  console.log(getPickerColor());

})