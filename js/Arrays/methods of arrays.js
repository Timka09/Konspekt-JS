// split () - робить з рядка масив по роздільнику (деліметру)
const message = "i love JavaScript"
const words = message.split(" ")
console.log(words)
const splitTest = "привіт! Я Тіма"
console.log(splitTest.split("! "))
const friends = "Тіма, Олежка, Ольга"
console.log(friends.split(""))
// join() - робить з масива рядок
const arrey = [5, 6, 9, 10, 56, 77]
const numbers = arrey.join(" < ")
console.log(numbers)
// indexOf() - дивиться під яким індексом занходиться елемент у масиві
const num = [5, 6, 7, 234, 67, 867]
const testNum = num.indexOf(67)
console.log(testNum)
// includes() - перевіряє чи є шуканий елемент у масиві
const bro = ["Tima", "Olga", "Sigma"]
const isFriendInArray = bro.includes("Tima")
console.log(isFriendInArray)
// pop() - видаляє останій елемент у масиві
bro.pop()
console.log(bro)
// push() - додає елемент у кінець масиву
bro.push("Max")
console.log(bro)
// unshift() - додає елемент на початок масиву
bro.unshift("Start")
console.log(bro)
// shift() - видяляє елемент на початку масива
bro.shift()
console.log(bro)
// slice() - дозволяє вирізати елементи з масиву і зробити їх новим масивом(також можна роботи копію масива)
const sliceArray = ["Банан", "Яблуко", "Апельсин", "Груша", "Персик", "Мандарин"]
const sliceTest = sliceArray.slice()
console.log(sliceTest)
console.log(sliceArray === sliceTest)
const newSlice = sliceArray.slice(0, 4)
console.log(newSlice)
// splice() - вирізає, додає елементи в\з масиву

// Видалення елементів з масива
const arr = [1, 2, 3, 4, 5];
const removed = arr.splice(1, 2); // Почати з індексу 1 і видалити 2 елементи
console.log(arr);     // Залишок масиву: [1, 4, 5]
console.log(removed); // Видалені елементи: [2, 3]

// Додавання елементів у масив
const arrr = [1, 2, 3];
arr.splice(1, 0, "a", "b"); // Почати з індексу 1, видалити 0 елементів, додати "a" і "b"
console.log(arr); // Результат: [1, "a", "b", 2, 3]