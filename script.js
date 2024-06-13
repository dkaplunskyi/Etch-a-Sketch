let container = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

  }

}

