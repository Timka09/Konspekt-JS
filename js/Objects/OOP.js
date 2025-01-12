// Прототипне наслідування - це коли ми створюємо обєкт(екземплям) та екземпляр унасліду,
// всі властивіості і методи від прототипа

const user = {
    site: "youtube",
    status: "standart",
    showInfo() {
    return `Данний користувач зареестрований на сайті: ${this.site} і наш статус ${this.status}`
    }
}
// створюємо обєкт на базі юзеру ^
// прототип
const userMark = Object.create(user)
console.dir(Object)
console.log(userMark.site)
console.log(userMark.showInfo())
console.log(userMark)
userMark.login = "Tima"
userMark.password = 8765432