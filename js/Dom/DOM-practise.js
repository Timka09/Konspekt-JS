// const fruits = [
//   {
//     title: "Jack fruit",
//     price: 1000,
//     photo:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnJtchAKRap2sVVuh8G12dz540D_WEDCKbg&s",
//   },
//   {
//     title: "Pear",
//     price: 500,
//     photo:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuHx-PY-PxrupxWhhWL3Ylb_7PwZvL44tJg&s",
//   },
//   {
//     title: "Apple",
//     ptice: 400,
//     photo:
//       "https://www.shutterstock.com/image-photo/red-apple-cut-half-water-600nw-2532255795.jpg",
//   },
//   {
//     title: "Banana",
//     ptice: 600,
//     photo:
//       "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg",
//   },
//   {
//     title: "Orange",
//     ptice: 350,
//     photo:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTct4QnA6zwU4tyn9vq_ADJ8Ey6RfIWK-6V6g&s",
//   },
// ];
// // 1. зробити динамічну розмітку
// const fruitsElem = fruits
//   .map(
//     (fruit) => `<li class="fruit-item">
//   <h2>${fruit.title}</h2>
//   <p>${fruit.price}</p>
//   <img src="${fruit.photo}" alt="${fruit.title}">
// </li>`
//   )
//   .join("");

// console.log(fruitsElem);
// const fruitList = document.querySelector(".fruits_list");
// // fruitList.innerHTML = fruitsElem

// // fruitList.insertAdjacentHTML("beforeend", fruitsElem);

// // 2. зробити динаммічну розмітку
// const fruitsList = document.querySelector("ul")

// fruits.forEach(fruit => {
//     const fruitItem = document.createElement("li")
//     const fruitTitle = document.createElement("h2")
//     const fruitText = document.createElement("p")
//     const fruitImg = document.createElement("img")

//     fruitTitle.textContent = fruit.title
//     fruitText.textContent = fruit.price
//     fruitImg.src = fruit.photo
//     fruitImg.alt = fruit.title;

//     fruitList.classList.add("fruits_list");
//     fruitItem.classList.add("fruit-item");
//     fruitTitle.classList.add("fruit-title")
//     fruitText.classList.add("fruit-discription")
//     fruitImg.classList.add("img");

//     fruitItem.append(fruitTitle, fruitText, fruitImg);
//     fruitsList.append(fruitItem)
// });

const newLink = document.createElement("a")
console.log(newLink)
newLink.setAttribute(
  "href",
  "https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D0%BD%D0%BE%D0%BC_(%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6)"
);
const test = newLink.hasAttribute("target")
console.log(test)
const attr = newLink.getAttribute("href")
console.log(attr)
newLink.setAttribute("target", "_blank")
const allAttr = newLink.attributes
console.log(allAttr)