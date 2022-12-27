let player = document.querySelector(`#player`);

// начальная координата квадрата
let x = 0;
let playerValue = 1;

document.addEventListener(`keydown`, function (e) {
  switch (e.key) {
    case `ArrowRight`:
      if (playerValue < 4) {
        x += 100;
        playerValue += 1;
      }
      break;
    case `ArrowLeft`:
      if (playerValue > 1) {
      x -= 100;

        playerValue -= 1;
      }
      break;
    default: break;
  }

  switch (playerValue) {
    case 1:
      color = `#000`;
      break;
    case 2:
      color = `#2b3d41`;
      break;
    case 3:
      color = `#4c5f6b`;
      break;
    case 4:
      color = `#83a0a0`;
      break;
    default: break;
  }

  

  player.style.left = `${x}px`;
  player.innerHTML = playerValue;
  player.style.backgroundColor = color;
})