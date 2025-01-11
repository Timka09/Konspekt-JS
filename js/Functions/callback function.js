// callback це функція, яку ми передаємо в іншу функцю, як аргумент
// функція в яку ми передаємо callback називається функцією !вищого порядку

// 1.callback додавання

// function countSum(a, b) {
//     const result = a + b
//     return result
// }

// function makeMessege(countSumCallBack) {
//     const res = countSumCallBack(2, 5)
//     const messege = `загальний результат вийшов ${res}`
//     return messege
// }
// console.log(makeMessege(countSum))

// 1.1 зробимо цю функцію для рррізних типів данних

function countSum(a, b) {
  const result = a + b;
  return result;
}

function multiplyNumbers(a, b) {
    const result = a * b
    return result
}

function makeMessege(calculationCallBack, a, b) {
  const res = calculationCallBack(a, b);
  const messege = `загальний результат вийшов ${res}`;
  return messege;
}
console.log(makeMessege(countSum, 1, 3));

console.log(makeMessege(multiplyNumbers, 6, 8));

// Напиши стрілкову функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)
// Для перевірки:
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));

const array = [93, 99, 93, 96];

function checkResult(getAvergeScore) {
    const resultAvergeScore = getAvergeScore(array)
    if (resultAvergeScore > 91 || resultAvergeScore <= 100) {
      return `Оцінка А середній бал: ${resultAvergeScore}`;
    } else if (resultAvergeScore > 81 || resultAvergeScore <= 90) {
      return `Оцінка B середній бал: ${resultAvergeScore}`;
    } else if (resultAvergeScore > 71 || resultAvergeScore <= 80) {
      return `Оцінка C середній бал: ${resultAvergeScore}`;
    } else if (resultAvergeScore > 61 || resultAvergeScore <= 70) {
      return `Оцінка D середній бал: ${resultAvergeScore}`;
    }
}

function myAverageScore(arrayData) {
    let resArray = 0
    for (let i = 0; i < arrayData.length; i++) {
        resArray = resArray + arrayData[i]
    }
    const avergeScore = resArray / arrayData.length
    return avergeScore
}
console.log(checkResult(myAverageScore))

// При реестрації користувача відубається перевірка на хороший пароль, який проходить нашу перевірку
// критерії - пароль має мінімум 5 символів та бути з великих літер
// якщо користувач придумав правельний пароль то привітати його з реєстрацією, якщо ні то попросити ще раз ввести пароль
// для повідомлення користувачу використати callback

function registration(callbackMessege, callbackGeneratePassword) {
    let savePassword = callbackGeneratePassword()
    if (savePassword.length >= 5 && savePassword.toLocalUpperCase()) {
        const saveMessage = callbackMessege(savePassword)
    return saveMessage    
    } else {
        alert("Ви ввели не валідний пароль! Спробуйте ще раз")
        savePassword = callbackGeneratePassword()
    }
}

function makeMessage(generatePassword) {
    const message = `Пароль надійний ${generatePassword}! Вітаємо з реєстрацією!!`
    return message
}

function generatePassword() {
    const password = prompt("Введіть пароль!")
    return password
}

console.log(registration(makeMessage,generatePassword))