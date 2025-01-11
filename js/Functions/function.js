// Функція - це шаблон коду який можна використовувати в різних цілях (як бібліотека)

// 1 спосіб: function declaration
// function назваФункції(параметри) {
//     тіло функції
//     return значення яке має повернути функція як резльтат
// }

// 2 спосіб: function expesion
// const назваФункції = function (параметри) {
//     тіло функції
//     return значення яке має повернути функція як резльтат
// }

// 3 спосіб: стрілковий спосіб
// без return
// const isEven = (number) => number % 2 === 0
// з return
// const isEven = (number) => {
// return number % 2 === 0
// }

// Виклик функції - назваФункції(аргументи)

function test() {
  console.log("Це моя перша функція!");
}
test();

function countSum(a, b, c) {
  return a + b + c;
}
const callSum = countSum(1, 23, 3);
console.log(callSum);
console.log(countSum(1, 23, 23));

// Напиши функцію яка повертає буль як результат перевірки числа на парність:

// console.log(isEven(4)); // true
// console.log(isEven(3)); // false
//  У цій функції ми перевіряємо, чи є передане число парним, повертаючи true якщо так, та false у протилежному випадку.

// 1 - варіант
// function isEven(number) {
//     if (number % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isEven(4))
// console.log(isEven(3));

// 2 - варіант
// function isEven(number) {
//     return number % 2 === 0
// }
// console.log(isEven(4))
// console.log(isEven(3));

// 3 - варіант
// const isEven = (number) => number % 2 === 0
// console.log(isEven(4))
// console.log(isEven(3));
// ---------------------------------------------------
// Напиши функцію яка повертає найбільше число в масиві:
// let array = [1, 3, 2, 5, 4];
// let max = findMaxNumber(array);
// console.log(max); // 5
//  У цій функції ми проходимо по масиву чисел та знаходимо найбільше число. Його повертаємо як результат функції.

// (було - function declaratin)
// function findMaxNumber(array) {
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }
// const array = [1, 3, 2, 5, 4, 43, 56];
// let max = findMaxNumber(array);
// console.log(max);

// (стало - function expresion)
// const findMaxArray
// -----------------------------------------------------
// Створити функцію hello1(), яка при виклику буде вертати текст “Привіт JavaScript”.
// function hello1() {
//     const text = "Привіт JavaScript";
//     return text
// }
// console.log(hello1())
// ------------------------------------------------------
// Напишіть функцію mul(n, m), яка приймає два аргументи і повертає добуток, суму і різницю цих аргументів. Перевірте її роботу.
// function mul(n, m) {
//     const sum = n + m
//     const pom = n * m
//     const riznyca = n - m
//     return `калькулятор вирахував ${riznyca} ,${sum} ,${pom}`
// }
// console.log(mul(10, 2))
// -------------------------------------------------------
// Напиши функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)
// Для перевірки:
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));
const array = [100, 75, 81, 96, 2];
function myAverageScore(array) {
  //крок1 - додати числа з масиву
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  // крок2 - поділити суму з масиву на кількість оцінок
  const quantityElements = array.length;
  const averge = sum / quantityElements;
  // крок3 - вивести результат у формати А
  if (averge >= 91 && averge <= 100) {
    return `my average Score: A and ${averge}`;
  } else if (averge >= 81 && averge <= 90) {
    return `my average Score: B and ${averge}`;
  } else if (averge >= 71 && averge <= 80) {
    return `my average Score: C and ${averge}`;
  } else {
    return `my average Score: D and ${averge}`;
  }
  // крок4 - повідомити користувача про середнье арифметичне
}
myAverageScore(array);
console.log(myAverageScore(array));
console.log(myAverageScore([93, 99, 93, 96]));

// якщо у функцію приходить різна кількіість аргументів, то ми можето використвовувати псвевдомасив "arguments"

// function calculation(a, b) {
//   return a * b * c
// }
// console.log(calculation(5, 5))
// console.log(calculation(5, 5, 5));
// // функція так праіювати не буде, тому що ккільскість аргументів і параметрів не співпадає

// // тому ми використовємо псевдомасив "arguments"

//   Array.from() - перетворює псевдомасив на масив, оскільки на псевдомасиві методи не праціють

// function calculation() {
//   console.log(arguments)
//   // const numbers = Array.from(arguments) - це якщо треба працювати з масивами(перетворюємо аргументи в масив)
//   let result = 1
//   for (let i = 0; i < arguments.length; i++) {
//     result = result * arguments[i]
//   }
//   return result
// }
// console.log(calculation(5, 6));
// console.log(calculation(5, 7, 8));


const birds = ["Geece", "Turkey", "Colibri", "Duck", "Peacook"];
//Відфільтрувати птахів назва яких більше 6 символів
function findTextWorldBird(birds) {
  //Крок 1: Створити змінну в якій ми будемо шукати шукану змінну
  const filterBirds = [];
  //Крок 2: Пройтися по масиву перебрати масив по циклу
  for (let i = 0; i < birds.length; i++) {
    if (birds[i].length > 6) {
      filterBirds.push(birds[i]);
    }
  }
  //Крок 3: Перевірити кожен елемент з масиву чи проходить ввін потрібну нам умову

  //Крок 4: Якщо елемент задовільняє умову то він потрапляє у масив

  return filterBirds;
}
console.log(findTextWorldBird(birds));

