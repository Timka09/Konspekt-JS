// Створіть функцію, яка буде додавати об'єкт в localStorage.
//  Назва об'єкту має бути ключем, а сам об'єкт - значенням.
const user = {
    login: "Tima",
    password: 3434
}

const friends = ["max", "Tima", "Olya"]
localStorage.setItem("friendsInfo", JSON.stringify(friends))

// add to locale storage
function SetToLocalStorage(userData, key) {
    // const archiveData = JSON.stringify(userData)
    // console.log(typeof archiveData)
    // localStorage.setItem("userInfo", archiveData)
    localStorage.setItem(key, JSON.stringify(userData));
}
SetToLocalStorage(friends, "friendsInfo");
SetToLocalStorage(user, "userInfo")

// Створіть функцію, яка буде отримувати об'єкт з localStorage.
// Назва об'єкту має бути ключем, а сам об'єкт - значенням.

// get from local storage
function GetFromLocalStorage(userData) {
    const dataFromLocalStorage = localStorage.getItem(userData)
    const parcedData = JSON.parse(dataFromLocalStorage)
    return parcedData
}

console.log(GetFromLocalStorage("friendsInfo"))
console.log(GetFromLocalStorage("userInfo"));

// remove from locale storage
function RemoveFromLocalStorage(key) {
localStorage.removeItem(key);
}

RemoveFromLocalStorage("userInfo");

// Створіть функцію, яка буде видаляти всі значення з localStorage.
// Eternal removal
function RemoveAllFromLocalStorage() {
localStorage.clear()
}

RemoveAllFromLocalStorage()