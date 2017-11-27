//Zadanie 1

const firstWord = `Hello`;
const secondWord = `World`;

const greeting = `${firstWord} ${secondWord}`;
console.log(greeting);

//Zadanie 2

const multiply = (a, b = 1) => a * b;
console.log(multiply(2));

//Zadanie 3

const average = (...param) => {
  let total = 0;
  param.forEach(item => {
    total += item;
  });
  return total / param.length;
};

console.log(average(1, 5, 5, 5, 4, 3, 3, 2, 1));

//Zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//Zadanie 5
const weird = [1, 4, "Iwona", false, "Nowak"];
const [, , firstName, , lastName] = weird;

console.log(`${firstName} ${lastName}`);

//Zastosowanie reduce()

const averageNew = (...param) => param.reduce((a, b) => a + b) / param.length;

console.log('Nowa średnia wynosi: ', averageNew(...grades));

