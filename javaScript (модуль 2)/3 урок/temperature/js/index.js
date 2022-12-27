let dInput = document.querySelector(`#d`);
let fInput = document.querySelector(`#f`);

let dToFButton = document.querySelector(`#d-to-f`);
let fToDButton = document.querySelector(`#f-to-d`);

dToFButton.addEventListener(`click`, function () {
  fInput.value = Number(dInput.value) * 1.8 + 32;
});

fToDButton.addEventListener(`click`, function () {
  dInput.value = (Number(fInput.value) - 32) / 1.8;
});
