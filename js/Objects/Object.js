// до ключа обєекту (не в обєкті) звертаєось через (назваЗміної.ключ)
// до ключа обєекту (в обєкті) звертаєось через (this.ключ)
const user = {
  userName: "Bob",
  age: 12,
  isStudent: false,
  friends: ["Tima", "Barys", "Ola", "Max"],
  address: {
    country: "Ukraine",
    city: "Kyiv",
  },
  // метод обєкту (функція)
  ChekFriends() {
    let messegeFriends = "Мої друзі ";
    for (let i = 0; i < this.friends.length; i++) {
      console.log(this.friends[i]);
      messegeFriends += this.friends[i] + ", ";
    }
    return messegeFriends;
  },
};
console.log(user.ChekFriends());
console.log(user.userName);
console.log(user.friends);
console.log(user.friends.splice(0, 2));
console.log(user.age);
console.log(user.address.country);

const userFriends = user.friends;
for (let i = 0; i < userFriends.length; i++) {
  console.log(userFriends[i]);
}

//додати ключ до об'єкту
user.hobby3 = 'music'
console.log(user)


//видалити ключ з об'єкту
delete user.isStudent
console.log(user)


//Якщо звертатися до неіснуючого ключа буде undefind
console.log(user.isStudent)

console.log(user.showFriends())

// короткі властивості. коли значення ключа записуємо у змінну
const hobby4 = 'running'
const friend5 = {
    friendName: 'Maks',
    hobby: 'running',
}

// підставимо змінну hobby замість значення running в об'єкті
const hobby1 = 'running'
const friend2 = {
    friendName: 'Maks',
    hobby: hobby1,
}

// скоротимо hobby: hobby
const hobby6 = 'running'
const friend6 = {
    friendName: 'Maks',
    hobby6
}

// вичисляючі властивості. ключ об'єкта записуємо у змінну
const studentPassword7 = "password";
const student7 = {
    login: '12345',
    password: '1111',
}

// підставимо замість назви ключа password змінну
const studentPassword8 = "password";
const student8 = {
    login: '12345',
    [studentPassword8]: '1111',
}

// тепер винесемо значення паролю у змінну
const savePassword = '1111';
const studentPassword = "password";
const student = {
    login: '12345',
    [studentPassword]: savePassword,
}

// об'єкти можна перебирати циклом for...in
const friend = {
    friendName: 'Maks',
    hobby: 'running',
}

for (const key in friend) {
    console.log(`У друга є такий ключ як ${key} та його значення ${friend[key]}`)
}

// метод Object.keys() . Він витягує з об'єкта всі ключі і робить їх масивом
const salaries = {
    workerPetya: '100000',
    workerVasya: '200000',
    workerFedya: '21000',
}

const workers = Object.keys(salaries);
console.log(workers);

// метод Object.values() . Він витягує з об'єкта всі значення ключів і аналогічно робить їх масивом
const workerSalaries = Object.values(salaries)
console.log(workerSalaries)

// Метод Object.entries() у JavaScript використовується для отримання масиву пар ключ-значення з об'єкта.
// Object.entries() — це інструмент для перетворення об'єкта в масив пар [ключ, значення], що робить його зручним для обробки даних, ітерацій, та перетворень.

// Як це працює
const user = { name: "Alice", age: 25, hobby: "painting" };

console.log(Object.entries(user));
// Виведе:
// [
//   ["name", "Alice"],
//   ["age", 25],
//   ["hobby", "painting"]
// ]

// Викорастаємо у циклі (дозволяє прееберати values i keys)
const user = { name: "Bob", age: 30 };

for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}
// Виведе:
// name: Bob
// age: 30

