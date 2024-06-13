let container = document.querySelector('.container');
let gridAria = 16;

for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.width = 100 / gridAria + '%';
    square.style.height = 100 / gridAria + '%';
    container.appendChild(square);

  }

}

