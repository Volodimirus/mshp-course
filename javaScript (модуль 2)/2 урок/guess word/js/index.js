let answerNode = document.querySelector(`#answer`);
let checkNode = document.querySelector(`#check`);
let resultNode = document.querySelector(`#result`);

// кнопки с буквами
let a = document.querySelector(`#a`);
let b = document.querySelector(`#b`);
let c = document.querySelector(`#c`);
let d = document.querySelector(`#d`);
let e = document.querySelector(`#e`);
let f = document.querySelector(`#f`);
let g = document.querySelector(`#g`);
let h = document.querySelector(`#h`);
let i = document.querySelector(`#i`);
let j = document.querySelector(`#j`);
let k = document.querySelector(`#k`);
let l = document.querySelector(`#l`);
let m = document.querySelector(`#m`);
let n = document.querySelector(`#n`);
let o = document.querySelector(`#o`);
let p = document.querySelector(`#p`);
let q = document.querySelector(`#q`);
let r = document.querySelector(`#r`);
let s = document.querySelector(`#s`);
let t = document.querySelector(`#t`);
let u = document.querySelector(`#u`);
let v = document.querySelector(`#v`);
let w = document.querySelector(`#w`);
let x = document.querySelector(`#x`);
let y = document.querySelector(`#y`);
let z = document.querySelector(`#z`);


// Клик по кнопке проверить
checkNode.addEventListener(`click`, function () {});

// Клик по кнопкам с буквами
a.addEventListener(`click`, function () {
  answerNode.innerHTML += a.innerHTML;
  a.classList.add(`disabled`);
});
b.addEventListener(`click`, function () {
  answerNode.textContent += b.textContent;
  b.classList.add(`disabled`);
});
c.addEventListener(`click`, function () {
  answerNode.innerHTML += c.innerHTML;
  c.classList.add(`disabled`);
});
d.addEventListener(`click`, function () {
  answerNode.textContent += d.textContent;
  d.classList.add(`disabled`);
});
e.addEventListener(`click`, function () {
  answerNode.textContent += e.textContent;
  e.classList.add(`disabled`);
});
f.addEventListener(`click`, function () {
  answerNode.textContent += f.textContent;
  f.classList.add(`disabled`);
});
g.addEventListener(`click`, function () {
  answerNode.textContent += g.textContent;
  g.classList.add(`disabled`);
});
h.addEventListener(`click`, function () {
  answerNode.textContent += h.textContent;
  h.classList.add(`disabled`);
});
i.addEventListener(`click`, function () {
  answerNode.textContent += i.textContent;
  i.classList.add(`disabled`);
});
j.addEventListener(`click`, function () {
  answerNode.textContent += j.textContent;
  j.classList.add(`disabled`);
});
k.addEventListener(`click`, function () {
  answerNode.textContent += k.textContent;
  k.classList.add(`disabled`);
});
l.addEventListener(`click`, function () {
  answerNode.textContent += l.textContent;
  l.classList.add(`disabled`);
});
m.addEventListener(`click`, function () {
  answerNode.textContent += m.textContent;
  m.classList.add(`disabled`);
});
n.addEventListener(`click`, function () {
  answerNode.textContent += n.textContent;
  n.classList.add(`disabled`);
});
o.addEventListener(`click`, function () {
  answerNode.textContent += o.textContent;
  o.classList.add(`disabled`);
});
p.addEventListener(`click`, function () {
  answerNode.textContent += p.textContent;
  p.classList.add(`disabled`);
});
q.addEventListener(`click`, function () {
  answerNode.textContent += q.textContent;
  q.classList.add(`disabled`);
});
r.addEventListener(`click`, function () {
  answerNode.textContent += r.textContent;
  r.classList.add(`disabled`);
});
s.addEventListener(`click`, function () {
  answerNode.textContent += s.textContent;
  s.classList.add(`disabled`);
});
t.addEventListener(`click`, function () {
  answerNode.innerHTML += t.innerHTML;
  t.classList.add(`disabled`);
});
u.addEventListener(`click`, function () {
  answerNode.textContent += u.textContent;
  u.classList.add(`disabled`);
});
v.addEventListener(`click`, function () {
  answerNode.textContent += v.textContent;
  v.classList.add(`disabled`);
});
w.addEventListener(`click`, function () {
  answerNode.textContent += w.textContent;
  w.classList.add(`disabled`);
});
x.addEventListener(`click`, function () {
  answerNode.textContent += x.textContent;
  x.classList.add(`disabled`);
});
y.addEventListener(`click`, function () {
  answerNode.textContent += y.textContent;
  y.classList.add(`disabled`);
});
z.addEventListener(`click`, function () {
  answerNode.textContent += z.textContent;
  z.classList.add(`disabled`);
});

checkNode.addEventListener('click', function () {
  answerNode.innerHTML = answerNode.innerHTML.replace(/(\r\n|\n|\s)/gm, '').toLowerCase();
  if (answerNode.innerHTML == `cat`) {
    resultNode.innerHTML = `правильно`;
  } else {
    resultNode.innerHTML = `неправильно`;
  }
})