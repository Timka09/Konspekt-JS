// цикл for
// Ітерація в циклі — це один повний прохід (виконання) тіла циклу, тобто повторення операцій, які описані в циклі. Під час кожної ітерації виконуються всі команди, які знаходяться всередині циклу, після чого перевіряється умова для наступної ітерації.
for (let i = 0; i <= 5; i += 1) {
  console.log(`це число ${i}`);
}
// Крок 1
// Ми запускаємо та ініціальзуємо його через let i = 0
// Крок 2
// Вказуємо доки має тривати цикл в умові i < 5 та перевіряємо її на true
// На данному етапі i < 5 це 0 < 5 тому це буде true
// Крок 3
// Оскільки в умові true, то виконується тіло цикул у фігурних дужках console.log(`Це число ${}`);
// Крок 4
// Збіьшуємо ітерацію i = i + 1, тобто і = 0 + 1, тобто вийде і = і
// Крок 5
// Тепер в і лежить 1 і ми перевіряємо умову на другому колі і < 5, тобто 1 < 5 це буде true
// Крок 6
// Оскільки в умові true, то виконується тіло циклу у фігурних дужках console.log(Це число ${1});
// Крок 7
// Збільшуємо ітерацію i = i + 1, тобто i = 1 + 1, тобто вийде i = 2
// Крок 8
// Тепер в i лежить 2 і ми перевіряємо умову на другому колі i < 5, тобто 2 < 5 це буде true
// Крок 9
// Оскільки в умові true, то виконується тіло циклу у фігурних дужках console.log(Це число ${2});
// Крок 10
// Збільшуємо ітерацію i = i + 1, тобто i = 2 + 1, тобто вийде i = 3
// Крок 11
// Тепер в i лежить 3 і ми перевіряємо умову на другому колі i < 5, тобто 3 < 5 це буде true
// Крок 12
// Оскільки в умові true, то виконується тіло циклу у фігурних дужках console.log(Це число ${3});
// Крок 13
// Збільшуємо ітерацію i = i + 1, тобто i = 3 + 1, тобто вийде i = 4
// Крок 14
// Тепер в i лежить 4 і ми перевіряємо умову на другому колі i < 5, тобто 4 < 5 це буде true
// Крок 15
// Оскільки в умові true, то виконується тіло циклу у фігурних дужках console.log(Це число ${4});
// Крок 16
// Збільшуємо ітерацію i = i + 1, тобто i = 4 + 1, тобто вийде i = 5
// Крок 17
// Тепер в i лежить 5 і ми перевіряємо умову на другому колі i < 5, тобто 5 < 5 це буде false
// Крок 18
// Оскільки в умові false, тому не виконується тіло циклу і цикл завершується

// цикл while
// let year = prompt("який ваш вік?")
// while (year <= 18) {
// alert(`Вам ${year} років`)
// year ++
// }

// // цикл do while
// let savePassword = 675409
// let password ;
// do {
// password = Number(prompt("pls password"))
// } while (password !== savePassword)

// Оператор break - перериває цикл в той момент де ми його поставимо, і виходить з циклу
// знайти число 33 серед чисел від 1 до 100
// for (let i = 1; i <= 100; i += 1) {
//     console.log(i)
//     if (i === 33) {
//         alert("Ми знайшли 33")
//         break
//     }
// }

// Оператор Continue - пропускає вказану ітерацію в циклі
// переберемо від 1 до 100 та покажемо лише парні числа
// for (let i = 1; i <= 100; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }
// for (let i = 0; i <= 100; i += 5) {
//     console.log(i)
// }
for (let i = 1; i <= 100; i += 1) {
  if (i % 2 === 0) {
      console.log(i);
  }
}