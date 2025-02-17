// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// if (-3 > 0) {
//   console.log("true");
// } else if (-3 < 0) {
//   console.log("false");
// }


// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let word = "qwerty";

// if (word === "test") {
//   console.log("true");
// }  else {
//   console.log("false");
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let num = 1;

// if (num >= 10) {
//   console.log(num - 5);
// }  else {
//   console.log(num + 5);
// }


//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const monthNumber = prompt("Введіть число від 1 до 12 для вибору місяця:");

// switch (monthNumber) {
//   case "1":
//     alert("Січень");
//     break;
//   case "2":
//     alert("Лютий");
//     break;
//   case "3":
//     alert("Березень");
//     break;
//   case "4":
//     alert("Квітень");
//     break;
//   case "5":
//     alert("Травень");
//     break;
//   case "6":
//     alert("Червень");
//     break;
//   case "7":
//     alert("Липень");
//     break;
//   case "8":
//     alert("Серпень");
//     break;
//   case "9":
//     alert("Вересень");
//     break;
//   case "10":
//     alert("Жовтень");
//     break;
//   case "11":
//     alert("Листопад");
//     break;
//   case "12":
//     alert("Грудень");
//     break;
//   default:
//     alert("Помилка: введіть число від 1 до 12.");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const number = prompt("Введіть тризначне число:");

// if (number.length === 3 && !isNaN(number)) {
//   const digit1 = parseInt(number[0], 10);
//   const digit2 = parseInt(number[1], 10);
//   const digit3 = parseInt(number[2], 10);

//   const sum = digit1 + digit2 + digit3;
//   alert(`Сума цифр числа ${number} дорівнює ${sum}`);
// } else {
//   alert("Помилка: введіть коректне тризначне число.");
// }
