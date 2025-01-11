// матиматичні операції
// -------------------------------------------------
// sum
const sum = 1 + 2;
console.log(sum);
// difference
const difference = 2 - 1;
console.log(difference);
// multiply
const multiply = 2 * 3;
console.log(multiply);
// division
const division = 4 / 2;
console.log(division);
// remainder
const remainder = 10 % 4;
console.log(remainder);
// процент знаходить остачу від ділення
// -------------------------------------------------
// stepin
const stepin = 2 ** 3;
console.log(stepin);
// -------------------------------------------------
// const sume = 0;
// const newSume = sume + 3
let sume = 0;
sume = 3;
const newSume = sume + 3;
console.log(newSume);
sume =+ 3
console.log(newSume)
// так можна скоротити попередній приклад (sume = sume + 3)
// --------------------------------------------------
let difference2 = 5;
difference2 = 1;
difference2 = 2;
console.log(difference2);
// --------------------------------------------------
// Number - конвертує рядкові данні в числові
console.dir(Number)
// dir показує що знаходиться в середниі елемента
const data = "10"
const number = typeof Number(data)
console.log(number)
console.log(Number(true))
console.log(Number(false))
console.log(Number(null))
console.log(Number(undefined))
console.log(data + 1)
console.log(Number(data) + 1)
// NaN - not any number(немає будь-якого числа)
const styles = "15.5px"
const styles2 = Number.parseInt(styles)
console.log(styles2);
const stylesFloate = Number.parseFloat(styles)
console.log(stylesFloate)
// Букви не можна переводити до числа
// pursInt витягує ціле число
// parseFloat витягує дробове число

