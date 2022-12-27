let nextButton = document.querySelector(`#next`);
let storyText = document.querySelector(`#story`);
let labelText = document.querySelector(`#label`);
let answerInput = document.querySelector(`#answer`);
let questionsNode = document.querySelector(`#questions`);
let story = ``;
let counter = 1;

let who, where, withWhom, whatWereDoing, why, ending;

nextButton.addEventListener(`click`, function () {
  // нужно увеличивать счетчик при клике на 1. v
  // в зависимости от значения счетчика, изменять надпись в поле ввода. v
  // при нажатии кнопки очищать поле ввода. v
  // при нажатии кнопки добавлять в переменную story значение поля answerInput. v
  // если counter = 6 то убрать поле ввода и вывести историю целиком. v

  if (counter === 1) {
    
  }

  counter += 1;

  switch (counter) {
    case 1:
      labelText.innerHTML = `Кто?`;
      who = answerInput.value;
      break;
    case 2:
      labelText.innerHTML = `Где?`;
      where = answerInput.value;
      break;
    case 3:
      labelText.innerHTML = `С кем?`;
      withWhom = answerInput.value;
      break;
    case 4:
      labelText.innerHTML = `Что делали?`;
      whatWereDoing = answerInput.value;
      break;
    case 5:
      labelText.innerHTML = `Зачем?`;
      why = answerInput.value;
      break;
    case 6:
      labelText.innerHTML = `Чем дело закончилось?`;
      ending = answerInput.value;
      break;
    default: break;
  }

  if (counter === 7) {
    questionsNode.classList.add(`d-none`);
    storyText.innerHTML = `${who} ${where} ${withWhom} ${whatWereDoing} ${why}. ${ending}`;
  }

  answerInput.value = ``;
});
