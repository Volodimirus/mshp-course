let lampNode = document.querySelector(`#lamp`);
let onNode = document.querySelector(`#on`);
let offNode = document.querySelector(`#off`);
let pageNode = document.querySelector(`#page`);

onNode.addEventListener(`click`, () => {
  lampNode.innerHTML = `<img class="img img-fluid" src="assets/light.png">`;
  lampNode.classList.add(`opacity-0`);
  pageNode.classList.remove(`dark`);
  lampNode.classList.remove(`opacity-0`);
});

offNode.addEventListener(`click`, () => {
  lampNode.innerHTML = `<img class="img img-fluid" src="assets/dark.png">`;
  lampNode.classList.add(`opacity-0`);
  pageNode.classList.add(`dark`); 
  lampNode.classList.remove(`opacity-0`);
});
