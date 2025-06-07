// Promise.all - цей метод чекає на завершення всіх переданих промісів, якщо хоч один відхиляється резултьтат всіх промісів стаж rejected
// 1
// const fetchUser = new Promise(resolve => {
//     setTimeout(() => {
//         resolve(`Дані користувача`)
//     },2000)
// })
// const fetchOrder = new Promise(resolve => {
//     setTimeout(() => {
//         resolve(`Ваше замовлення`)
//     },5000)
// })
// const fetchMessege = new Promise(resolve => {
//     setTimeout(() => {
//         resolve(`Ваше повідомлення`)
//     },8000)
// })

// Promise.all([fetchUser, fetchOrder, fetchMessege]).then(result => {
//     console.log(result)
// })

// 2
// const fetchUsers = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(["user1", "user2", "user3"]);
//   }, 2000);
// });

// const fetchPosts = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(["post1", "post2", "post3"]);
//   }, 5000);
// });

// const fetchComments = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(["comment1", "comment2"]);
//   }, 8000);
// });

// Promise.all([fetchUsers, fetchPosts, fetchComments]).then(
//   ([users, posts, comments]) => {
//     console.log(users, comments, posts);
//   }
// );

// Promise.race

const slowServer = new Promise((resolve) => {
  setTimeout(() => resolve("Повільний сервер"), 8000);
});

const fastServer = new Promise((resolve) => {
  setTimeout(() => resolve("Швидкий сервер"), 5000);
});

Promise.race([slowServer, fastServer]).then((result) => console.log(result));

// Promise.any()
// Помилкові
const try1 = Promise.reject("сервер 1 недоступний");
const try2 = Promise.reject("сервер 2 недоступний");
// Правельний
// const try3 = new Promise((resolve) => {
//   setTimeout(() => resolve("Відповідь від server 3"), 5000);
// });

// Promise.any([try1, try2, try3]).then(result => console.log(result)).catch(error => console.log('Немає вільних серверів'))
Promise.any([try1, try2]).then(result => console.log(result)).catch(error => console.log('Немає вільних серверів'))