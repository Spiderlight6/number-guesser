// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

const guess = document.getElementById("myinput");
const Valid = document.getElementById("valid");
const Low = document.getElementById("low");
const Submit = document.getElementById("mybutton");
const Correct = document.getElementById("correct")

let running = true;
let score = 0;





Submit.onclick = function() {
    const guessValue = guess.value;

    

    if (isNaN(guessValue)) {
        Low.textContent = `Please enter a valid number`;
    } else {
        const guessNum = Number(guessValue);

        if (guessNum < minNum || guessNum > maxNum) {
            Low.textContent = `Number out of bound`;
        } else {
            score++;
            if (guessNum < answer) {
                Low.textContent = `Try a Higher number!`;
                
            } else if (guessNum > answer) {
                Low.textContent = `Try a Lower number`;
        
            } else {
                Low.textContent = ""
                Correct.textContent = `CONGRATULATIONS! It took you  ${score} attempts`;
                running = false;
            }
        }
    }
};


