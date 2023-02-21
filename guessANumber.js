function guessANumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let computerGuess = Math.floor(Math.random() * 100);
    let guess;
    
    // Recursion is a process of calling itself. A function that calls itself is called a recursive function. A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.
    // Once the condition is met, the function stops calling itself. This is called a base condition. To prevent infinite recursion, you can use if...else statement (or similar approach) where one branch makes the recursive call, and the other doesn't.
    let recuriveAsyncReadLine = function () {
        readline.question('Guess the number (0-100): ', number => {
            guess = Number(number);
            
            if (guess <= 100 && guess >= 0) {
                if (guess == computerGuess) {
                    console.log('You guess it!');
                    return readline.close();
                } else if (guess < computerGuess) {
                    console.log('Too Low!');
                    recuriveAsyncReadLine()
                } else if (guess > computerGuess) {
                    console.log('Too High!');
                    recuriveAsyncReadLine()
                }
            } else {
                console.log('Invalid input! Try again...');
                recuriveAsyncReadLine();
            }
        });
    }
    recuriveAsyncReadLine();
}
guessANumber();