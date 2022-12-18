let hideNode = document.querySelector(`#hide`);
let clickNode = document.querySelector(`#click`);
let textNode = document.querySelector(`#text`);

clickNode.addEventListener(`click`, function () {
  hideNode.innerHTML = ``;
  textNode.innerHTML = `Ура! Можно отдохнуть`;
});
