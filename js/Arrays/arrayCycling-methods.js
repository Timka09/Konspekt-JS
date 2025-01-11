// Синтаксис - перебераючих методів

// назваМасива.назваМетода((елементМаисву,індексЕлементу,масив) => {
// тіло(що буде відбуватись з кожним елементом масиву)
// return
// })

// Метод forEach() - є заміной циклу, тобто переберає масив, робить щось з кожним елементом та нічого не повертає(може змінівати вхідні данні)

const friends = ["pc", "phone", "drone", "bike"]
friends.forEach((friend,friendIndex) => {
    console.log(`Знайомтесь це мій друг №${friendIndex + 1} ${friend} `)
})

// метод мap() - створює копію масиву і оперуює(перебирає) елементами в ньому

// example 1
const fruits = ["apelsin", "bananna", "mandarin", "apple"] 

const fruitLength = fruits.map((fruit) => fruit.length)
console.log(fruitLength)

// example 2

// Використовуючи 👆 масив об’єктів виконай наступні завдання
// Отримати масив імен всіх гравців
// Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
// Збільшити кількість годин гравця по id. Переписати на тернарник
// Отримати масив всіх гравців онлайн
// Отримати масив всіх гравців офлайн
// Отримати масив всіх хардкорних гравців з часом більше 250
// Знайти гравця по id
// Знайти гравця по імені
// Перевірити чи всі гравці мають час більше 200
// Перевірити чи всі гравці онлайн


const players1 = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

// Task 1
const saveName = players1.map((player) => player.id)
console.log(saveName)

// Task 2
// const saveTimePlayed = players.map((player) => {
//     // const newPlayer = {
//     //     ...player,
//     //     timePlayed: player.timePlayed + 10
//     // }
// Розшифруємо:
//     const newPlayer = {
//       id: "player-5",
//       name: "Chelsy",
//       points: 48,
//       online: true,
//       timePlayed: player.timePlayed + (player.timePlayed / 100 * 10),
//     };
// return newPlayer
// })
// console.log(...saveTimePlayed)

const saveTimePlayed = players1.map((player) => ({
    ...player,
    timePlayed: player.timePlayed + (player.timePlayed / 100) * 10,
  })
);
console.log(saveTimePlayed);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];
//   Використовуючи 👆 масив об’єктів виконай наступні завдання
//   Отримати масив імен всіх гравців
//   Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
//   Збільшити кількість годин гравця по id. Переписати на тернарник
//   Отримати масив всіх гравців онлайн
//   Отримати масив всіх гравців офлайн
//   Отримати масив всіх хардкорних гравців з часом більше 250
//   Знайти гравця по id
//   Знайти гравця по імені
//   Перевірити чи всі гравці мають час більше 200
//   Перевірити чи всі гравці онлайн

// Task4
const onlinePlayer = players.filter((player) => player.online);
// Task5
const oflinePlayer = players.filter((player) => !player.online);
// Task7
const idPlayer = players.find((player) => player.id === "player-4");
// Task 8
const namePlayer = players.find((player) => player.name === "Kiwi");
// Task9
const chekPlayer = players.every((player) => player.timePlayed === 200);
// Task10
// every() - перевіряє чи всі елементи відповідають умові і повертає тру або фолс
const areOnline = players.every((player) => player.online);
// some() - перевіряє чи хоча б один елемент відповідає умові і повертає тру або фолс
const someOnline = players.every((player) => player.online);

// reduce - переберає масив, витягує з нього кожен елемент та опрацьовує його в тілі callback;
// шукає тойтип данних чи значення чяке ми вказали в акамуляторі
const arr = [4, 6, 2, 1, 50];
const sum = arr.reduce((acc, element) => {
  return acc + element;
}, 0);

// krok 1
// Викликаємо reduce на масиві arr, створюється акумулятор acc у параметрах callback, в нього ми присвоюємо 0(acc = 0)
// krok 2
// починає виконватися тіло callback, acc + element, тобто 0 + 4
// вийде 11 яке запишеться в acc (оновить аккумулятор)
// krok 3
// починається наступан ітерація, приходить число 6 у параметр element
// krok 4
// в тілі виконується acc + element, тобто 4 + 6, вйде 10
// krok 5
// тепер в acc буде 10 (перезапишеться)
// krok 6
// починається наступан ітерація, приходить число 10 у параметр element
// і так до закінчення чисел у масиві
// krok 7
// числа в масиві завершилися, тому reduce припиняє своє виконання і вертає значення в аккумуляторі(результат буде 63)

const players2 = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

// зробимо масив імен за допомогою reduce()
const playersNames = players2.reduce((accArr, player) => {
  accArr.push(player.name);
  return accArr;
}, []);

// Відфільтруємо масив за поінтами (більше 50) за допомгою reduce()
const playerPoints = players.reduce((accFiltredArr, player) => {
  if (player.points > 50) {
    accFiltredArr.push(player);
  }
  return accFiltredArr;
}, []);

// Метод sort() - сортує елементи у масиві, та змінює елементи у масиві (змінюють тільки forEach та Sort) тому перед сортуванням треба створити копію масиву та її сортувати
// відсортуємо від меншого до більшого

const randomNumbers = [3, 1, 6, 10, 7, 15];

randomNumbers.sort(); // сортує оригінал ❌
console.log(randomNumbers);

const copyArr = [...randomNumbers];
const sortNumbers = copyArr.sort((prevNum, nextNum) => {
  return prevNum - nextNum;
});
console.log(sortNumbers);

// відсортуємо імена
const names = ["bro", "Tima", "Barys"];
const copyNames = [...names];

copyNames.sort((prevName, nextName) => prevName.localeCompare(nextName));
console.log(copyNames);

// відсортуємо players

const players3 = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

const copyPlayers = [...players3];
copyPlayers.sort((prevPlayer, nextPlayer) => {
  return prevPlayer.name.localeCompare(nextPlayer.name);
});
