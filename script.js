let container = document.querySelector('.container');
let gridAria = 32;

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

let getRandomColor = () => { return 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')' };
let getBlackColor = () => { return 'rgb(0,0,0)' };

let squares = document.querySelectorAll('.square');
squares.forEach((e) => {
  e.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = getBlackColor();
    e.preventDefault;
  })
});
