let plusNode = document.querySelector(`#plus`);
let minusNode = document.querySelector(`#minus`);
let amountNode = document.querySelector(`#amount`);

let count = 0;

plusNode.addEventListener("click", function () {
  count += 1;
  amountNode.innerHTML = count;
});

minusNode.addEventListener(`click`, function () {
  count -= 1;
  amountNode.innerHTML = count;
});
