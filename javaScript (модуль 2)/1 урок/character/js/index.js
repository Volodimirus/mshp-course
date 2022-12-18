let name = `Эмиль`;
let age = 20;
let role = `Бард`;
let ability = `Сила убеждения и острометные шутки`;
let gold = 23;

let abilityNode = document.querySelector(`#ability`);
abilityNode.innerHTML = ability;
let goldNode = document.querySelector(`#gold`);
goldNode.innerHTML(`в кармане ` + gold + ` золотых`);