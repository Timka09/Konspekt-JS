// OOP - це метод написання коду через обєкти
// Процедурне генерування - це написання коду через незвязані між собою функції та змінні(що в майбутньому може заважати та незиіватись spaghetti code)

// Прототипне наслідування - це коли ми створюємо обєкт(екземплям). Eкземпляр унаслідує, всі властивіості і методи від прототипа


// hasOwnProperty() - перевіряє чи має зазначений обєкт свій елемент (та повертає тру або фолс)

// isPrototypeOf() - перевіряє чи зазначений єкземпляр є зазначеним прототипом

// прототип
const user = {
    site: "youtube",
    status: "standart",
    showInfo() {
    return `Данний користувач зареестрований на сайті: ${this.site} і наш статус ${this.status}`
    }
}
// створюємо обєкт на базі юзеру ^
// єкземпляр
const userMark = Object.create(user)
console.dir(Object)
console.log(userMark.site)
console.log(userMark.showInfo())
console.log(userMark)
userMark.login = "Tima"
userMark.password = 8765432

for (const key in userMark) {
    if (userMark.hasOwnProperty(key)) {
        console.log(key);
    }
}

// Функція конструктор - це модель або шаблон, за яким ми створюємо екземпляр
// передамо аргументи у вигляді обєкта параметрів
const Car = function ({ modelCar, priceCar, colorCar}) {
  // const {modelCar, priceCar, colorCar} = infoBMW
  this.model = modelCar;
  this.cost = priceCar;
  this.color = colorCar;
  this.showInfo = function () {
        return `автомобіль ${this.model} коштує ${this.cost} та має колір ${this.color}`
    }
};

const infoBMW = {
    modelCar: "BMW",
    priceCar: 6000,
    colorCar: "white"
}

const carBMW = new Car(infoBMW)
console.log(carBMW)

const carLamba = new Car({
    modelCar: "Lamborgini",
    priceCar: 10000000,
    colorCar: "blue"
})
console.log(carLamba)

console.log(carBMW.showInfo())
console.log(carLamba.showInfo());

// Напишемо гру битва орків та елфів
class Hero {

    constructor(infoOrk) {
        this.name = infoOrk.heroName
        this.points = infoOrk.heroPoints;
        this.power = infoOrk.heroPower;
    }

    showInfo() {
        return `Герой ${this.name} має стільки поїнтів ${this.points} та стільки сили ${this.power}`
    }
}

class Ork extends Hero {
    constructor(infoOrk) {
        super(infoOrk) // Цей метод затягує данні з конструктора класу Hero
        this.skin = infoOrk.heroSkin
        this.iq = infoOrk.heroPoints
    }

    orkAttacks() {
        return `Вас атакує орк з iq ${this.iq}`
    }
}

const broOrk = new Ork({
    heroName: "Bro",
    heroPoints: 10,
    heroPower: 20,
    heroSkin: "green",
    heroIq: 4
})
console.log(broOrk)

const alexOrk = new Ork({
  heroName: "Alex",
  heroPoints: 12,
  heroPower: 22,
  heroSkin: "green",
  heroIq: 6,
});
console.log(alexOrk)

class Elf extends Hero {
    constructor(infoElf) {
        super(infoElf)
        this.earsLength = infoElf.heroEarsLength
        this.age = infoElf.heroAge
    }

    elfPowers() {
        return `Ельф виходить до бою з такою кількістью років ${this.age}`
    }
}

const johnElf = new Elf({
    heroName: "John",
    heroPoints: 15,
    heroPower: 10,
    heroEarsLength: "15см",
    heroAge: 500
})


const bredElf = new Elf({
  heroName: "Bred",
  heroPoints: 15,
  heroPower: 10,
  heroEarsLength: "15см",
  heroAge: 500,
});
console.log(bredElf)

console.log(alexOrk.showInfo())
console.log(alexOrk.orkAttacks())

console.log(johnElf.elfPowers())