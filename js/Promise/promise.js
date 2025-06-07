// Створення промісу
const promise = new Promise((resolve, reject) => {
  const DELAY = 1000;
  //   const isSuccesss = Math.random() > 0.5;
  //   if (isSuccesss) {
  //     resolve("Promise fulfiled");
  //   }
  //   reject("Promise rejected");

  setTimeout =
    (() => {
      if (isSuccesss) {
        resolve("Promise fulfiled");
      }

      reject("Promise rejected");
    },
    DELAY);
});

console.log(promise);
console.log("after promise");

// promise.then(result => {
//     // сюди приходить результат із resolve
// }, error => {
// сюди приходить результат із reject
// })

// then потрібег щоб опрацювати проміс після першого опрацювання
promise.then(onFulfilled, onReject);

function onFulfilled(result) {
  console.log("onFulfilled");
  console.log(`${result}`);
}
function onReject(error) {
  console.log(`${result}`);
}

// Ланцюжок promises(без cath) - синхроне опрацювання прому за допомогою then
// then - потрібно для опрацювання правельних промісів
// error - для запису помилок
promise
  .then(onFulfilled, onReject)
  .then(
    (x) => {
      console.log(x);
      return 10;
    },
    (error) => console.log(error)
  )
  .then(
    (y) => console.log(y),
    (error) => console.log(error)
  );
// Ланцюжок promises(з cath) - синхроне опрацювання прому за допомогою then
// cath - для опрацювання помилкових промісів(записує всі посмлки просто к кінці)
promise
  .then(onFulfilled)
  .then((x) => {
    console.log(x);
    return 10;
  })
  .then((y) => console.log(y))
  .catch((error) => console.log(error))
  .finally(() => console.log("Дія буде виконана в будь-якому разі!!!"));

 
// Promise.all() - приймає масив промісів и повертає проміс. Якщо всі виконалися правельно то проміс на виході прееходить у стан fulfiled. Якщо не то rejected