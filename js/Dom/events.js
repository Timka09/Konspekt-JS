const btn = document.querySelector("#btn");
console.log(btn);
// Додати зміну кольору сторінки при кліку на кнопку
btn.addEventListener("click", (event) => {
  const page = document.querySelector("body");
  const red = Math.random() * (255 - 0) + 0;
  const green = Math.random() * (255 - 0) + 0;
  const blue = Math.random() * (255 - 0) + 0;
  page.style.backgroundColor = `rgba(${red},${green},${blue})`;
  console.log(event.target);
});
// пишемо текст в інпуті через слухач input(перевідправляє кожен символ який ми напишемо)
const inpElem = document.querySelector("#inp");
inpElem.addEventListener("input", (event) => {
  console.log(event.target.value);
});
// пишемо текст в інпуті через слухач change(перевідправляє кожну нашу подію в інпуті після того як ми з нього виходимо)
const inpTest = document.querySelector("#inp1");
inpTest.addEventListener("change", (event) => {
  console.log(event.target.value);
});
// "focus" додаєм подію при фокусі
btn.addEventListener("focus", (event) => {
  btn.style.backgroundColor = "red";
});
// "blur" прибирає подію при фокусі
btn.addEventListener("blur", (event) => {
  btn.style.backgroundColor = "white";
});

inpTest.addEventListener("focus", (event) => {
  inpTest.style.boxShadow = "3px 4px 15px 8px red";
});

inpTest.addEventListener("blur", (event) => {
  inpTest.style.boxShadow = "none";
});
// "submit"
const formElem = document.querySelector("#form");
console.log(formElem);
formElem.addEventListener("submit", (event) => {
  event.preventDefault(); // блокуэ перезавантаження сторынки через submit
  const login = event.currentTarget.elements.login.value;
  const password = event.currentTarget.elements.password.value;
  const userData = {
    userLogin: login,
    userPassword: password,
    };
    console.log(userData)
});
// currentTarget
const divElem = document.querySelector("#test")
divElem.addEventListener("click", (event) => {
    console.log(event.target, "Це таргет") 
    console.log(event.currentTarget, "Це currentTarget")
})
// Для події клавуітури, ми слухач завжди додаємо на document
document.addEventListener("keydown", (event) => {
    if (event.code === "KeyG") {
      document.body.style.backgroundColor = "green";
    } else if (event.code === "KeyY") {
      document.body.style.backgroundColor = "yellow";
    } else if (event.code === "KeyV") {
      document.body.style.backgroundColor = "violet";
    } else if (event.code === "KeyN") {
      document.body.style.backgroundColor = "white";
    } else if (event.code === "KeyB") {
      document.body.style.backgroundColor = "black";
    } else if (event.code === "KeyW") {
      document.body.style.backgroundColor = "grey";
    }
    // console.log(event.key)
    console.log(event.code);
})
// задача
const baxElem = document.querySelector("#box")
document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
        baxElem.style.margin = "10px"
    }
})