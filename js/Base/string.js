// тип данних рядок
const testMessege = "test";
console.log(testMessege);
const firstLatter = testMessege[0]
console.log(firstLatter);
// [] викликає індекс у рядку
const lastLatter = testMessege[3];
console.log(lastLatter);
// length показує кількість символів у рядку
const messegeLength = testMessege.length;
console.log(messegeLength);
// знаходимо індекс
const lastLatterIndex = testMessege.length - 1;
console.log(lastLatterIndex);
// конкатенація рядків (зшивання)
const friendName = "Oleg";
const greatings = "hello my friend, ";
const messege = greatings + " " + friendName;
console.log(messege);
console.log("My best friend is " + friendName);
// так ми можемо підставляти змінну посеред рядка за допомогою `${}`- інтерпуляція
const newMessege = `the age of ${friendName} friend is 10`;
console.log(newMessege);
// властивості та методи рядків
// toUpperCase() робить всі букви в рядку великими
const info = "I am Ukrainian";
const bigInfo = info.toUpperCase();
console.log(bigInfo);
// toLowerCase() робить букви в рядку маленькими
const smallInfo = info.toLowerCase();
console.log(smallInfo);
// includes перевіряє чи є те що ми ввели в рядку є чи нема
const mess = 'Привіт я принц Абдул, це не спам, пропоную';
const hasSpam = mess.includes('спам');
console.log(hasSpam);
// indexOf перевірка під яким індексмо знаходиться певне слово чи символ
const checkIndex = mess.indexOf("це не спам");
console.log(checkIndex);
// -1 зявляється коли ти вписуєш неіснуючу фразу // ("це Не спам");
// метод trim обрізає пробіли на початку і в кінці рядка
const metod = ' привіт це текст ';
const metodLength = metod.length;
console.log(metodLength);
const trimedMessege = metod.trim();
const trimedLength = trimedMessege.length;
console.log(trimedLength);
// метод padStart доповнює недостатні символи напочатку
const advert = 'Куплю будинок';
console.log(advert.length);
const fullAdvert = advert.padStart(15, ".");
console.log(fullAdvert);
// метод padEnd доповнює недостатні символи в кінці
const notice = advert.padEnd(20, "!");
console.log(notice);
// метод startsWith перевіряє чи є зазначене слово на початку
const checkStart = mess.startsWith('Привіт');
console.log(checkStart);
// метод endsWith перевіряє чи є зазначене слово в кінці
const checkEnd = mess.endsWith("пропоную");
console.log(checkEnd);