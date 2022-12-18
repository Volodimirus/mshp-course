
let appleCountNode = document.querySelector(`#appleCount`);
let applePriceNode = document.querySelector(`#applePrice`);

let cheseCountNode = document.querySelector(`#cheseCount`);
let chesePriceNode = document.querySelector(`#chesePrice`);

let eggCountNode = document.querySelector(`#eggCount`);
let eggPriceNode = document.querySelector(`#eggPrice`);

let totalNode = document.querySelector(`#total`);

let appleCount = appleCountNode.innerHTML;
let applePrice = applePriceNode.innerHTML;

let cheseCount = cheseCountNode.innerHTML;
let chesePrice = chesePriceNode.innerHTML;

let eggCount = eggCountNode.innerHTML;
let eggPrice = eggPriceNode.innerHTML;

totalNode.innerHTML = appleCount * applePrice + cheseCount * chesePrice + eggCount * eggPrice;
