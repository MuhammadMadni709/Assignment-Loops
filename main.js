"use strict";
// Loops Assignments //
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Creating a Lesson Plan(Using for loop )
// let myWork = []
// for (let index = 1; index <= 10; index++) {
//     let lesson = {
//         name: "Lesson" + " " + index,
//         status: index % 2 == 0 ? true : false,
//         }
//         myWork.push(lesson)
//         }
//         console.log(myWork);
// 2. Guessing Game (Using while loop ) //
// let number1 = 50;
// let randomNumber : number [] = [Math.floor(Math.random() * number1 + 1)];
// console.log(randomNumber);
// let guesses = [3, 25, 35, 15, randomNumber];
// let guess = guesses;
// while (guess){
//     if(guess === randomNumber){
//         let guessIsCorrect = true;
//         console.log("You Guessed Right Number!");
//         break;
//     } else if (guess > randomNumber) {
//         console.log("Your Guessed Number is Greater.");
//     } else {
//         console.log("Your Guessed Number Is Lower.");
//     }
//     break;
// }
// 3. Counter Incrementer (Using do while loop ) //
// let counter = 0;
// let step = 10
// do{
//     console.log(counter);
//     counter = counter + step
// }
// while(counter < 100);
// 4.Exploring Objects with for...in Loop
// let myObject ={
//     item1 : "laptop",
//     item2 : "phone",
//     item3 : "pen",
//     item4 : "book",
// }
// for (let item in myObject){
//     console.log(item, myObject);
//     }
// 5.Exploring Arrays with Loops(Using loop )
let myArray = [];
for (let index = 0; index < 10; index++) {
    myArray.push(index + 1);
}
;
console.log(myArray);
for (let i = 0; i < myArray.length; i++) {
    console.log("myArray" + " " + i + " " + myArray[i]);
}
for (const myNum of myArray) {
    console.log(myNum);
}
