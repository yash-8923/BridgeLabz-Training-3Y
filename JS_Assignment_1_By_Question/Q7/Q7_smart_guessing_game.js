// Generate a secret number from 1 to 50 and set a sample guess.
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25;

console.log(`Secret number: ${secretNumber}`);
console.log(`Your guess: ${userGuess}`);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    const difference = Math.abs(userGuess - secretNumber);

    if (difference <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
