// логіка це boolean
// false === 0, null, undefind, "", NaN, false
// логічне and (&&) шукає останнє true, але якщо є хоча б 1 false, то зупиняеєтсья на ньому
console.log(0 && 2 && "" && undefined && 9);
console.log(5 > 3 && 0 === 0 && "pop");
// логічне або (||) шукаж перше true, якщо зустрічає false пропускає його(якщо все false то просто відображає останній false)
console.log(1 || 5 || "" || null);
// логічний оператор не (!) робить інверсію, тобто міняє true на false, false на true
console.log(!0);
console.log(!1);

// Напиши скрипт який провіряє можлтвість відкрити чат з користувачем.
//   Для цього користувач має бути:
//  - другом
//  - онлайн
//   - без режиму не турбувати

const isFriend = true;
const isOnline = true;
const isNotify = true
const canOpenChat = isFriend && isOnline && isNotify;
console.log(canOpenChat)

// Напиши скрипт перевірки підписки користувача при доступі до контенту
//  - Є три типи підписки: free, pro та vip.
//  - Отримати доступ можуть лише користувачі pro та vip

const isSubscribe = prompt("Ведіть свій тип підписки");
const acces = isSubscribe === "pro" || isSubscribe === "vip";
console.log(isSubscribe)
if (isSubscribe === "pro" || isSubscribe === "vip") {
  alert("Ви авторизовані");
} else {
  alert("Ваш тип підписки не підходить для авторизації");
}

