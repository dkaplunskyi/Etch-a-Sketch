let container = document.querySelector('.container');
let gridAria = 100;

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

