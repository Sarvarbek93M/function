"use script";

let number = 7;
// let number = 7; global

function getText(text) {
  console.log(text);
  let number = 10;
  console.log(number);
}
// let number = 10; bu ichki uzgaruvchi
// function ichida kelgan uzgaruvchilar birinchi uqiladi
getText("salom text");
// funksiya ishlatilayotganda qaysi argumentni chiqarilayotganda albatta "" ichida yoziladi.
console.log(number);

function calc(a, b) {
  return a + b;
}
console.log(calc(5, 10));
console.log(calc(15, 10));
console.log(calc(25, 10));
console.log(calc(35, 10));

// function decloration bunda malumotni chiqaruvchi kod functiondan oldin kelsa ham buladi
function returnNumber() {
  let number = 7;
  return number;
  // return function oxirida yoziladi va malumotlar qatradi
}

const num = returnNumber();
console.log(num);

// function expression
const funcExpr = function () {
  console.log(77);
};
funcExpr();

//array function

const arrayfunction = (c, d) => c + d;
const plus = arrayfunction(10, 19);
console.log(plus);
