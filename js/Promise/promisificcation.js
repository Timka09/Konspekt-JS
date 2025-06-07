// trough callback
// const makeOrder = (order, onSuccess, onError) => {
//   const DELAY = 2000;
//   const isSuccess = Math.random() > 0.5;
//   // якщо більше 0.5 то буде true якщо ні то буде false

//   setTimeout(() => {
//     if (isSuccess) {
//       onSuccess(`Ваш ${order} виканано!`);
//     } else {
//       onError(`Вибачте ми не зможемо виконати ваш ${order}`);
//     }
//   }, DELAY);
// };
function onSuccess(result) {
  return console.log(result);
}

function onError(error) {
  return console.log(error);
}
// console.log(makeOrder("pizza", onSuccess, onError));

// trough promise

const makeOrder = (order) => {
  const DELAY = 2000;
  const isSuccess = Math.random() > 0.5;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(`Ваш ${order} виканано!`);
      } else {
        reject(`Вибачте ми не зможемо виконати ваш ${order}`);
      }
    }, DELAY);
  });
  return promise;
};

makeOrder("pizza Chicago").then(onSuccess).catch(onError);

// Це все і є promisification