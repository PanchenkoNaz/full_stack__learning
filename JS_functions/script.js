// function

// function showMessage (name, city) {
//     console.log("Hello my name is " + name + " I'm from " + city);
// }
// showMessage("Nick", "Kyiv");
// showMessage("Simon", "Berlin");




// const userName = "Nazar";
// const sayHi = function () {
//     let message = "Hello, my name is "
//     console.log(message  + userName);
// }
// sayHi();




// function sum(a, b) {
//     return a + b;
// }
// let result = sum(7, 8);
// console.log(result);




// const testFunc = function (a, b) {
//     console.log("a :", a);
//     console.log("b :", b);
//     c = a + b;
//     return c;
// };
// testFunc(5, 8);





// const a = function () {
//     c();
//     console.log("function a");
//     b();
// };

// const b = function () {
//     console.log("function b");
// };

// const c = function () {
//     console.log("function c");
// };
// a();




// const addName = function () {
//     const arg = Array.from(arguments);
//     console.log(arguments);
//     console.log(arg);
// };
// addName(1, 3, 5);
// addName(1, 3, 5, 67, 55);



// const addName = function (...arg) {
//     console.log(arg);
// };
// addName(1, 3, 5);
// addName(1, 3, 5, 54, 91);





// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }
// function showOk() {
//     console.log("You say ok");
// }
// function showCancel() {
//     console.log("You say No");
// }
// ask("Yes or no?", showOk, showCancel);




// const hello = function (name) {
//     console.log(`Hello, ${name}`);
// };
// const searchName = function (callback) {
//     const name = "Nick";
//     callback(name);
// };
// searchName(hello);





// function checkAge(age) {
//     if (age > 18) {
//         return console.log("Hello");
//     }
//        return console.log("Good bye");
// }
// checkAge(12);




// function showMovie(age) {
//     if (age < 21) {
//         return
//     }
//     return console.log("Go to movie");
// }
// showMovie(11);





// const test = (arg) => {
//     console.log(arg);
// };
// test("hello");




// const showMovie = (age) => {
//     if (age < 21) {
//         return console.log("Hello");
//     }
//     return console.log("Bye!");
// };
// showMovie(2);





// const a = () => {
//     console.log("a");
// };

// const b = () => {
//     console.log("b");
// };

// const c = () => {
//     console.log("c");
//     a();
//     b();
// };
// c();






// const addNumber = (number) => {
//     let summ = Number(number) + 10;
//     return console.log(summ);
// }

// const numberRef = document.querySelector('input[name="number"]');

// const buttonRef = document.querySelector("button");

// buttonRef.addEventListener("click", () => {
//     addNumber(numberRef.value);
// });
















 