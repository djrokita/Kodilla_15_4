"use strict";

//Zadanie 1

var firstWord = "Hello";
var secondWord = "World";

var greeting = firstWord + " " + secondWord;
console.log(greeting);

//Zadanie 2

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log(multiply(2));

//Zadanie 3

var average = function average() {
  for (var _len = arguments.length, param = Array(_len), _key = 0; _key < _len; _key++) {
    param[_key] = arguments[_key];
  }

  var x = 0;
  param.forEach(function (item) {
    x += item;
  });
  return x / param.length;
};

console.log(average(1, 5, 5, 5, 4, 3, 3, 2, 1));

//Zadanie 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

//Zadanie 5
var weird = [1, 4, "Iwona", false, "Nowak"];
var firstName = weird[2],
    lastName = weird[4];


console.log(firstName + " " + lastName);
