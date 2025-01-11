// If
if (1 === 1) {
    console.log("Код вкинонається (бо 1 = 1 і це true)");
}
// if else
if (1 === 1) {
    console.log("Код вкинонається (бо 1 === 1 і це true)");
} else {
    console.log("Код не виконається (бо 1 === 1 повинен бути false[1 === 0])");
}
// else if
const userAge = prompt("введіть свій вік")
if (userAge >= 0 && userAge < 10) {
    alert("Ви дитина");
}
else if (userAge >= 10 && userAge < 18) {
    alert("Ви підліток");
}
else if (userAge >= 18 && userAge < 50) {
    alert("Ви дорослий(а)");
}
else if (userAge >= 50 && userAge < 110) {
    alert("Ви пенсіонер(ка)")
}
else {
    alert("Ви страи бох")
}

// Тернарний оператор

// умова ? те що виконується при true : те що виконується при false

userAge <= 7
    ? alert("ви в початковій школі")
    : alert("ви в коледжі або в ліцеї");


  
