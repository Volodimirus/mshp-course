let upButton = document.querySelector(`#up`);
let downButton = document.querySelector(`#down`);
let countInput = document.querySelector(`#count`);

upButton.addEventListener(`click`, function () {
  countInput.value = Number(countInput.value) + 1;
})

downButton.addEventListener(`click`, function () {
  countInput.value = Number(countInput.value) - 1;
})