let health = 50;
let count = 0;

let enemyNode = document.querySelector(`#dragon`);
let healthNode = document.querySelector(`#health`);

enemyNode.addEventListener(`click`, function () {
  count += 1;

  if (count === 1) {
    health -= 1;
  } else if (count === 2) {
    health -= 3;
  } else {
    health -= 10;
    count = 0;
  }

  if (health > 0) {
    healthNode.innerHTML = `Здоровье: ${health}`;
  } else {
    enemyNode.innerHTML = `<img src="assets/dragon-fruit.png" alt="dragon fruit">`;
    healthNode.innerHTML = `Вы побеждаете дракона. Он на ваших глазах уменьшается и становится маленьким и симпатичным. Возьмём его с собой?`;
  }
});
