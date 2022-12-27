let container = document.getElementById(`container`);
let pointButton = document.querySelector(`#point`);
let lineButton = document.querySelector(`#line`);

let counter = 1;
let x = 0;
let y = 0;
let draw = `не рисуй`;
let color = `black`;

document.addEventListener(`keydown`, function (e) {
  switch (e.key) {
    case "e":
      draw = `не рисуй`;
      break;
    case `q`:
      draw = `рисуй`;
      break;
    case `1`:
      color = `#c1f7dc`;
      break;
    case `2`:
      color = `#c3d2d5`;
      break;
    case `3`:
      color = `#bda0bc`;
      break;
    case `4`:
      color = `#a2708a`;
      break;
    case `5`:
      color = `#824670`;
      break;
    default:
      break;
  }
});

pointButton.addEventListener(`click`, function () {
  draw = `не рисуй`;
});

lineButton.addEventListener(`click`, function () {
  draw = `рисуй`;
});

document.addEventListener(`click`, function (e) {
  x = e.clientX;
  y = e.clientY;

  container.innerHTML += `
  <div
    class="dot"
    style="top: ${y}px; left: ${x}px;">
    ${counter}
  </div>`;

  counter++;
});

document.addEventListener(`mousemove`, function (e) {
  if (draw === `рисуй`) {
    x = e.clientX;
    y = e.clientY;

    container.innerHTML += `
    <div
      class="dot"
      style="top: ${y}px; left: ${x}px; background-color: ${color}">
    </div>`;
  }
});
