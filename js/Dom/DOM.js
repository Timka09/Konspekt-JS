// Для того щоб отриматт посилання у JS на елемент з HTML (з дом дерева) використовуємо метод query.selector()

const boxElement = document.querySelector(".box")
console.log(boxElement)

boxElement.style.backgroundColor = "red"

const boxElements = document.querySelectorAll("div")
console.log(boxElements)

boxElements.forEach((divElemnt) => {
    divElemnt.style.boxShadow = "2px 3px 15px 3px black"
})

const titleElement = boxElement.firstElementChild
console.log(titleElement)

const nextBox = boxElement.nextElementSibling
console.log(nextBox)

console.log(boxElement.children);

const photoElement = document.querySelector("img")
console.log(photoElement)

photoElement.src =
    "https://www.forumdaily.com/wp-content/uploads/2022/10/iStock-1383831579.jpg";
  
photoElement.alt = "smile"

const textElement = document.querySelector("h2")
console.log(textElement)

textElement.textContent = "lingan guli guli guli wazaaaaaaaaaa"

console.log(textElement.classList.contains("text"))

textElement.classList.add("text")
console.log(textElement.classList.contains("text"));

textElement.classList.remove("text")
console.log(textElement)

// створити статю в якый э заголовок опис рецепта, картинку та посилання на сам рецепт

const articleElement = document.createElement("article")
console.log(articleElement)

const titleArcticle = document.createElement("h2")
console.log(titleArcticle)
titleArcticle.textContent = "рецепт млинців"


const discriptionRecipe = document.createElement("p");
console.log(discriptionRecipe);
discriptionRecipe.textContent = "moloko i blablabla";

const photoPanCakes = document.createElement("img")
photoPanCakes.src =
    "https://img1.russianfood.com/dycontent/images_upl/457/big_456172.jpg";
  
photoPanCakes.alt = "blin"

const linkA = document.createElement("a")
linkA.href = "https://www.russianfood.com/recipes/bytype/?fid=921";
linkA.textContent = "recipe of pancakes"

articleElement.append(titleArcticle, discriptionRecipe, photoPanCakes, linkA);

const page = document.querySelector("body")

page.append(articleElement)