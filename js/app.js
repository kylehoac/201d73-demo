'use strict'

let rightans = 0 

alert('Welcome to my "about me" website. You will be put through a series of yes or no questions that will teach you a little more about me. Please press "OK" to continue');

function guessName() {

    let name = prompt("Is my name Kyle?").toLowerCase();
    console.log('The user answered ' + name)
    if (name === "yes" || name === "y") {
        rightans += 1;
        alert("Your answer is correct!");
    }
    else if (name === "no" || name === "n") {
        alert("Your answer is incorrect");
    }
}
guessName();

function guessAge() {

    let age = prompt("Am I 21 years old?").toLowerCase();
    console.log('The user answered ' + age)
    if (age === "no" || age === "n") {
        rightans += 1;
        alert("Your answer is correct!");
    }
    else if (age === "yes" || age === "y") {
        alert("Your answer is incorrect");
    }
}
guessAge();

function guessJob() {

    let job = prompt("Did I previously worked in education?").toLowerCase();
    console.log('The user answered ' + job)
    if (job === "no" || job === "n") {
        rightans += 1;
        alert("Your answer is correct!");
    }
    else if (job === "yes" || job === "y") {
        alert("Your answer is incorrect");
    }
}
guessJob();

function guessColor() {

    let color = prompt("My favorite color is red").toLowerCase();
    console.log('The user answered ' + color)
    if (color === "no" || color === "n") {
        rightans += 1;
        alert("Your answer is correct!");
    }
    else if (color === "yes" || color === "y") {
        alert("Your answer is incorrect");
    }
}
guessColor();

function guessState() {

    let state = prompt("I was born in raised in Washington").toLowerCase();
    console.log('The user answered ' + state)
    if (state === "no" || state === "n") {
        rightans += 1;
        alert("Your answer is correct!");
    }
    else if (state === "yes" || state === "y") {
        alert("Your answer is incorrect");
    }
}
guessState();

let userName = prompt("Please enter your name!")
console.log(`User specified name as ` + userName)
alert('Welcome ' + userName + '!')

let answer = 7;
let guesses = 4;
for (let i = 0; i < guesses; i++) {
    let userAnswer = prompt(`Please enter a number from 1-10`);
    if (userAnswer == answer) {
        rightans += 1;
        alert(`You got it right!`);
        console.log('User answered ' + userAnswer)
        break;
    } else if (userAnswer < 7) {
        alert(`Guess was too low!`)
    } else if (userAnswer > 7) {
        alert(`Guess was too high!`)
    } else {
        alert(`Must enter a number`)
    }

}
alert(`The answer is ` + answer);

let ans = [4, 6, 7];
let guess = 6;
for (let i = 0; i < guess; i++) {
    let userAns = parseInt(prompt("Once again, please enter a number from 1 - 10"))
    // console.log(typeof userAns)
    while(userAns < 1 || userAns > 10){
        userAns=prompt(`Please enter a number between 1-10`)
    }
    for (let k = 0; k < ans.length; k++) {
        if (userAns === ans[k]) {
            rightans += 1;
            alert(`You got it right! The correct answers were 4, 6, and 7!`)
            console.log('User answered ' + userAns)
            i = 7
            break;
        }
    }
}
alert('You got ' + rightans + ' answers correct!')
console.log(`User answered ` + rightans + ` questions correctly`)
