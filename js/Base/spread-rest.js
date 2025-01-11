//операція rest - зберігає елементи у масив

function sumNum1() {
  const num = Array.from(arguments);
  let res = 0;
  for (let i = 0; i < num.length; i++) {
    res += num[i];
  }
  return res;
}
console.log(sumNum1(8, 3));
console.log(sumNum1(9, 5, 6));

// arguments не працює в стрілковій фунції, тому ми використовуєио rest
const sumNum = (...numbers) => {
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i];
  }
  return res;
};
console.log(sumNum(8, 3));
console.log(sumNum(9, 5, 6));

//операція spread - дозволяє зробити з масива не масив, тобто витягує з масива усі елементи

const testArr = [1, 2, 3, 4, 5];
console.log(...testArr);
// в консолі буде не масив а числа

const sumNum2 = (a, b, c, d, f) => {
  const calculate = a + b + c + d + f;
  return calculate;
};
console.log(sumNum2(...testArr));

// spread також може обєднувати масиви, чи обєкти
// обєеднання масиву
const oldFreinds = ["bike", "bro", "chel", "brat"];
const newFreinds = ["Andre", "kot", "ktoto", "sestres"];
const allFreinds = [...oldFreinds, ...newFreinds];
console.log(allFreinds);

//  обєднання обєкту
const bro = {
  userName: "Timohaaaaaaaaa",
  age: 15,
  login: "cho",
};

const broInfo = {
  login: "TimohaBro",
  password: 151212,
};

const broData = {
  ...broInfo,
  ...bro,
};
console.log(broData);

// spread також може зробити копію масивy, чи обєкту
// копія масиву
const old1Freinds = ["bike", "bro", "chel", "brat"];
const oldCopy = [...old1Freinds];
console.log(oldCopy);

// копія обєкту
const chel = {
  userName: "Timohaaaaaaaaa",
  age: 15,
  login: "cho",
};

const chelCopy = {
  ...chel,
};

console.log(chelCopy);
