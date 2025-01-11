console.dir(Math)
console.log(Math.max(1, 2, 4, 5, 9, 7, 8))  
// шукає найбільше число з перелічених
console.log(Math.min(3, 9, 5, 7, 10))
// шукає найменше число з перелічених
console.log(Math.pow(56, 3))
// переводить число в степінь
console.log(Math.round(4.68987))
// округлює число до найближчого цілого
console.log(Math.ceil(4.68987))
// округлює число до найближчого вищого цілого
console.log(Math.floor(4.68987))
// округлює число до найближчого нищого цілого

const randomNumber = Math.random(Math.random() * (20 - 1) + 1)
console.log(randomNumber)
// генерує випадкове число між 1 і 20