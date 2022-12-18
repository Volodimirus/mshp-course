let template1 = `<div class="col-3">
<div class="card text-center">
    <img src="assets/apple.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">Яблоко</h5>
    </div>
</div>  
</div>
`;

let template2 = `<div class="col-3">
<div class="card text-center">
    <img src="assets/cheese.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">Сыр</h5>
    </div>
</div>  
</div>
`;

let template3 = `<div class="col-3">
<div class="card text-center">
    <img src="assets/eggs.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">Яйца</h5>
    </div>
</div>  
</div>
`;

let rowNode = document.querySelector(`#row`);
let button1Node = document.querySelector(`#button1`);
let button2Node = document.querySelector(`#button2`);
let button3Node = document.querySelector(`#button3`);

window.onLoad = rowNode.innerHTML = template1;

button1Node.addEventListener('click', () => {
  rowNode.innerHTML = template1;
})

button2Node.addEventListener('click', () => {
  rowNode.innerHTML = template2;
})

button3Node.addEventListener('click', () => {
  rowNode.innerHTML = template3;
})