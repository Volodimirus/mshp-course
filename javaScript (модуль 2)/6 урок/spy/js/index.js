let spy = document.querySelector(`#spy`);
let resultClick = document.querySelector(`#result-click`);
let resultType = document.querySelector(`#result-type`);

document.addEventListener(`mousemove`, function (e) {
  resultClick.innerHTML = `${e.clientX}x ${e.clientY}y`;
});

document.addEventListener(`click`, function (e) {
  spy.style.left = `${e.clientX - 50}px`;
  spy.style.top = `${e.clientY - 50}px`;
});

let x = 0;
let y = 0;

document.addEventListener(`keydown`, function (e) {
  resultType.innerHTML = e.key;

  switch (e.key) {
    case "ArrowUp":
      y -= 200;
      break;
    case "ArrowRight":
      x += 200;
      break;
    case "ArrowDown":
      y += 200;
      break;
    case "ArrowLeft":
      x -= 200;
      break;
    default:
      break;
  }

  spy.style.left = `${x}px`;
  spy.style.top = `${y}px`;
});
