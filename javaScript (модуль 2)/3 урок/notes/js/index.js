let template = `
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Название</h5>
    <h6 class="card-subtitle mb-2 text-muted">Категория</h6>
    <p class="card-text">Содержание</p>
  </div>
  <div class="card-footer text-muted">
    Дата
  </div>
</div>
`;

let saveButton = document.querySelector(`#save`);
let textInput = document.querySelector(`#text`);
let titleInput = document.querySelector(`#title`);
let categoryInput = document.querySelector(`#category`);
let dateInput = document.querySelector(`#date`);
let notesNode = document.querySelector(`#notes`);

saveButton.addEventListener(`click`, function () {
  let card = ``;

  if (categoryInput.value.toLowerCase() === "важное") {
    card = `
      <div class="col-md-4">
        <div class="card important">
          <div class="card-body">
            <h5 class="card-title">${titleInput.value}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${categoryInput.value}</h6>
            <p class="card-text">${textInput.value}</p>
          </div>
          <div class="card-footer text-muted">
            ${dateInput.value}
          </div>
        </div>
      </div>
    `;
  } else if (categoryInput.value.toLowerCase() === "учеба") {
    card = `
      <div class="col-md-4">
        <div class="card study">
          <div class="card-body">
            <h5 class="card-title">${titleInput.value}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${categoryInput.value}</h6>
            <p class="card-text">${textInput.value}</p>
          </div>
          <div class="card-footer text-muted">
            ${dateInput.value}
          </div>
        </div>
      </div>
    `;
  } else {
    card = template;
  }

  notesNode.innerHTML += card;
  textInput.value = ``;
  titleInput.value = ``;
  categoryInput.value = ``;
  dateInput.value = ``;
});
