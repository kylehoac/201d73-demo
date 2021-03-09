alert('Welcome to my "about me" website. You will be put through a series of yes or no questions that will teach you a little more about me. Please press "OK" to continue');

function guessname(){

    let name = prompt ("Is my name Kyle?").toLowerCase();
    console.log('The user answered ' + name)
    if (name === "yes" || name === "y"){
        alert ("Your answer is correct!");
    }
    else if(name === "no" || name === "n"){
        alert ("Your answer is incorrect");
    }
}
guessname();

function guessage(){

    let age=prompt("Am I 21 years old?").toLowerCase();
    console.log('The user answered ' + age)
    if(age === "no" || age === "n"){
        alert("Your answer is correct!");
    }
    else if(age === "yes" || age === "y"){
        alert("Your answer is incorrect");
    }
}
guessage();

function guessjob(){
    
    let job=prompt("Did I previously worked in education?").toLowerCase();
    console.log('The user answered ' + job)
    if(job === "no" || job === "n"){
        alert("Your answer is correct!");
    }
    else if(job === "yes" || job === "y"){
        alert("Your answer is incorrect");
    }
}
guessjob();

function guesscolor(){
    
    let color=prompt("My favorite color is red").toLowerCase();
    console.log('The user answered ' + color)
    if(color === "no" || color === "n"){
        alert("Your answer is correct!");
    }
    else if(color === "yes" || color === "y"){
        alert("Your answer is incorrect");
    }
}
guesscolor();

function guessstate(){
    
    let state=prompt("I was born in raised in Washington").toLowerCase();
    console.log('The user answered ' + state)
    if(state === "no" || state === "n"){
        alert("Your answer is correct!");
    }
    else if(state === "yes" || state === "y"){
        alert("Your answer is incorrect");
    }
}
guessstate();