'use strict'

// alert('Welcome to my "about me" website. You will be put through a series of yes or no questions that will teach you a little more about me. Please press "OK" to continue');

// function guessName() {

//     let name = prompt("Is my name Kyle?").toLowerCase();
//     console.log('The user answered ' + name)
//     if (name === "yes" || name === "y") {
//         alert("Your answer is correct!");
//     }
//     else if (name === "no" || name === "n") {
//         alert("Your answer is incorrect");
//     }
// }
// guessName();

// function guessAge() {

//     let age = prompt("Am I 21 years old?").toLowerCase();
//     console.log('The user answered ' + age)
//     if (age === "no" || age === "n") {
//         alert("Your answer is correct!");
//     }
//     else if (age === "yes" || age === "y") {
//         alert("Your answer is incorrect");
//     }
// }
// guessAge();

// function guessJob() {

//     let job = prompt("Did I previously worked in education?").toLowerCase();
//     console.log('The user answered ' + job)
//     if (job === "no" || job === "n") {
//         alert("Your answer is correct!");
//     }
//     else if (job === "yes" || job === "y") {
//         alert("Your answer is incorrect");
//     }
// }
// guessJob();

// function guessColor() {

//     let color = prompt("My favorite color is red").toLowerCase();
//     console.log('The user answered ' + color)
//     if (color === "no" || color === "n") {
//         alert("Your answer is correct!");
//     }
//     else if (color === "yes" || color === "y") {
//         alert("Your answer is incorrect");
//     }
// }
// guessColor();

// function guessState() {

//     let state = prompt("I was born in raised in Washington").toLowerCase();
//     console.log('The user answered ' + state)
//     if (state === "no" || state === "n") {
//         alert("Your answer is correct!");
//     }
//     else if (state === "yes" || state === "y") {
//         alert("Your answer is incorrect");
//     }
// }
// guessState();

// let userName = prompt("Please enter your name!")
// alert('Welcome ' + userName + '!')

// let answer = 7;
// let guesses = 4;
// for (let i = 0; i < guesses; i++) {
//     let userAnswer = prompt(`Please enter a number from 1-10`);
//     if (userAnswer == answer) {
//         alert(`You got it right!`);
//         break;
//     } else if (userAnswer < 7) {
//         alert(`Guess was too low!`)
//     } else if (userAnswer > 7) {
//         alert(`Guess was too high!`)
//     } else {
//         alert(`Must enter a number`)
//     }

// }
// alert(`The answer is ` + answer);


// let favColor = prompt(`Guess one of my favorite colors`)

// switch (favColor) {

//     case `blue`:
//         alert(`You got one!`);
//         break;

//     case `red`:
//         alert(`You got one!`);
//         break;

//     case `green`:
//         alert(`You got one!`);
//         break;

//     default:
//         alert(`You guessed wrong!`);
//         console.log(favcolor)
// }