//User enter maximum number of their choice and is stored in the variable maximum

let maximum = parseInt(prompt("Enter the maximum number!"));
//check if user entered a valid number
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));

}
//Generate random number from 1 to maximum inclusive and assign it to variable
const targetNum = Math.floor(Math.random() * maximum) + 1;

//prompt the user to enter first guess or quit the game and increment guessing attempt
let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

//checks if guess is equal to target number or not

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
}

//quits the game if user enters q

if (guess === 'q') {
    console.log("OK, YOU QUIT!")
//congratulates user for winning and prints the attempts made
	
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempts} guesses`)
}
