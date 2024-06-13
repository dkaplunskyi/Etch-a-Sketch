let container = document.querySelector('.grid');
let grid = document.querySelector('#grid');
let colorPicker = document.querySelector('#colorPicker');
let colorsBtn = document.querySelectorAll('input[type="button"]');

let gridAria = 16;

grid.addEventListener('change', (e) => {
  let value = e.target.value;
  if (value > 100) {
    alert('Maximum size is 100');
  } else {
    gridAria = e.target.value;
    deleteGrid();
    createGrid();
  }
})

let deleteGrid = () => {
  container.replaceChildren();
}

let createGrid = () => {
  for (let i = 1; i <= gridAria; i++) {
    for (let j = 1; j <= gridAria; j++) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.style.width = 100 / gridAria + '%';
      square.style.height = 100 / gridAria + '%';
      container.appendChild(square);
      // square.textContent = `${i}:${j}`;
    }
  }
}
createGrid();


let getRandomColor = () => { return 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')' };
let getBlackColor = () => { return 'rgb(0,0,0)' };

let blackColor = getBlackColor();


colorsBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {

  })
});

let squares = document.querySelectorAll('.square');
squares.forEach((sqr) => {
  sqr.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = getRandomColor();
  });
});


colorPicker.addEventListener('change', (e) => {
  randomColor = e.target.value;
})