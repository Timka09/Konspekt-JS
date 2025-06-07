// час
const date = new Date()
// console.log(date)
// console.dir(date)

const date1 = Date.now();
console.log(date1)

setTimeout(() => {
    const date2 = Date.now()
    console.log(date1)
    console.log(date2 - date1);
}, 3000)

// встановлюємо дату
const randomDate = new Date(2009, 9, 11, 6, 25)
console.log(randomDate)

// отримуємо рік
const date3 = new Date()
console.log(date3.getFullYear())

// отримаємо місяць
console.log(date3.getMonth() + 1)

// отримаємо порядковий номер неділі
console.log(date3.getDay())

// отримаємо порядковий день місяця
console.log(date3.getDate());

// отримаємо години
console.log(date3.getMinutes());

// отримаємо секунди
console.log(date3.getSeconds());

// отримаємо мілісекунди
console.log(date3.getMilliseconds());

// отримаємо міжнародний стан часу
console.log(date3.toISOString());

// отримаємо український стан часу та інші
console.log(date3.toLocaleDateString());
console.log(date3.toLocaleDateString("en-us"));
console.log(date3.toLocaleDateString("en-uk"));

// змінюємо дату
date3.setFullYear(2025, 5, 1)
console.log(date3)

// змінюємо місяць
date3.setMonth(9, 1)
console.log(date3);

// змінюємо підпорядкований день місяця
date3.setDate(10);
console.log(date3);

// Задача на кількість секунд після відкриття сторінки
const getBtn = document.querySelector(".js-time")
const start = new Date()
console.log(start)
getBtn.addEventListener("click", () => {
    const now = new Date()
    console.log(now);
    const sec = Math.round((now - start) / 1000);
    console.log(sec)
    alert(`Після відкриття сторінки пройшло ${sec} секунд(да)`)
})

// 
function getCurrentDateTime() {
  const date = new Date();
  console.log(date);

  const year = date.getFullYear();
  console.log(year);

  const month = String(date.getMonth() + 1).padStart(2, "0");
  console.log(month);

  const dateDay = String(date.getDate()).padStart(2, "0");
  console.log(dateDay);

  const hours = String(date.getHours()).padStart(2, "0");
  console.log(hours);

  const minutes = String(date.getMinutes()).padStart(2, "0");
  console.log(minutes);

  const seconds = String(date.getSeconds()).padStart(2, "0");
  console.log(seconds);
}
console.log(getCurrentDateTime());

// 
// function addDaysToDate(date, days) {
//   const someDate = new Date(date);
//   console.log(someDate);
//   console.log(someDate.getDate() + days);
//   someDate.setDate(someDate.getDate() + days);
//   return someDate.toISOString().split(T)[0];
// }
// console.log(addDaysToDate("2025-05-31", 4));

// Перевірка на високосний рік
function isLeapYear(year) {
  return(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

console.log(isLeapYear(2025)); 

// 
function isWeekend() {
    const toDay = new Date()
    console.log(toDay)

    const day = toDay.getDay()
    console.log(day)

    const IsWeekendDay = day === 0 || day === 6
    return alert(IsWeekendDay ? "Сьогодні вихідний" : "Сьогодні робочій")
}
console.log(isWeekend())