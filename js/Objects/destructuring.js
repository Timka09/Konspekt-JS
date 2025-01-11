// Деструктурізація це спосіб скоротити звернння до ключів в обєкті(перетворюючи їх у змінні)
// Диструктурізація робить з ключів змінні
const user = {
    name: "Ajax",
    password: 12345,
    friends: ["Bro", "Tima"],
    address: {
        country: 'Ukraine',
        town:"Kyiv"
    }
}
console.log(user.address.country)
console.log(user.password)
console.log(user.friends)
console.log(user.name)

const { address: {country, town}, name: userName, friends, password } = user
console.log(password, friends,userName )