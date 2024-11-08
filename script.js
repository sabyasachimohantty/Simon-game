let power = 0;
let start = 0;
let strict = false;
let rounds = 0;
let intervalId;
let turn = false;
let won = false;
let fail = false;
let userIndex = 0;
let pattern = [];
const choices = ['g', 'r', 'b', 'y'];

const power_input = document.getElementById("power")
const start_button = document.getElementById("start")
const strict_input = document.getElementById("strict")
const box_divs = document.querySelectorAll(".box")
const greenBox_div = document.getElementById("green")
const redBox_div = document.getElementById("red")
const yellowBox_div = document.getElementById("yellow")
const blueBox_div = document.getElementById("blue")
const count_div = document.querySelector(".count-box")

function reset() {
    rounds = 0;
    intervalId = 0;
    turn = false;
    won = false;
    fail = false;
    userIndex = 0;
    pattern = [];
}

function glowGreen() {
    greenBox_div.classList.add("green-glow")
    setTimeout(() => greenBox_div.classList.remove("green-glow"), 300);
}

function glowRed() {
    redBox_div.classList.add("red-glow")
    setTimeout(() => redBox_div.classList.remove("red-glow"), 300);
}

function glowBlue() {
    blueBox_div.classList.add("blue-glow")
    setTimeout(() => blueBox_div.classList.remove("blue-glow"), 300);
}

function glowYellow() {
    yellowBox_div.classList.add("yellow-glow")
    setTimeout(() => yellowBox_div.classList.remove("yellow-glow"), 300);
}

function glowBox(box) {
    switch (box) {
        case 'g':
            glowGreen();
            break;
        case 'r':
            glowRed();
            break;
        case 'b':
            glowBlue();
            break;
        case 'y':
            glowYellow();
            break;
    }
}

function flash() {
    glowGreen();
    glowRed();
    glowBlue();
    glowYellow();
}

function generatePattern() {
    for (let i = 0; i < 20; i ++) {
        index = Math.floor(Math.random() * 4)
        pattern.push(choices[index])
    }
}

function glowPattern(rounds) {
    let i = 0
    intervalId = setInterval(() => {
        if (i === rounds) {
            clearInterval(intervalId)
            turn = true;
            return
        }
        glowBox(pattern[i]);
        i ++;
    }, 800);
}

function startGame() {
    userIndex = 0;
    if (rounds > 10) {
        won = true;
        flash();
    }

    if (!won && !turn) {
        if (!fail) {
            rounds ++;
        }
        count_div.innerHTML = rounds;
        glowPattern(rounds);
    }
}

function main() {
    power_input.addEventListener("click", function() {
        if (power_input.checked) {
            power = 1;
            count_div.innerHTML = "-";
        } else {
            power = 0;
            start = 0;
            reset();
            count_div.innerHTML = "";
        }
    })

    strict_input.addEventListener("click", function() {
        if (strict_input.checked) {
            strict = true;
        } else {
            strict = false;
        }
    })

    start_button.addEventListener("click", function() {
        if (power) {
            start = 1;
            reset();
            count_div.innerHTML = rounds
            generatePattern();
            startGame();
        }
    })

    greenBox_div.addEventListener("click", function() {
        if (turn && !won) {
            glowGreen()
            if (pattern[userIndex] !== 'g') {
                flash();
                fail = true;
                turn = false;
                if (strict) {
                    rounds = 1
                }
                startGame();
                return;
            }
            userIndex ++;
            if (userIndex === rounds) {
                fail = false;
                turn = false;
                startGame();
                return;
            }
        }
    })

    redBox_div.addEventListener("click", function() {
        if (turn && !won) {
            glowRed()
            if (pattern[userIndex] !== 'r') {
                flash();
                fail = true;
                turn = false;
                if (strict) {
                    rounds = 1
                }
                startGame();
                return;
            }
            userIndex ++;
            if (userIndex === rounds) {
                fail = false;
                turn = false;
                startGame();
                return;
            }
        }
    })

    blueBox_div.addEventListener("click", function() {
        if (turn && !won) {
            glowBlue()
            if (pattern[userIndex] !== 'b') {
                flash();
                fail = true;
                turn = false;
                if (strict) {
                    rounds = 1
                }
                startGame();
                return;
            }
            userIndex ++;
            if (userIndex === rounds) {
                fail = false;
                turn = false;
                startGame();
                return;
            }
        }
    })

    yellowBox_div.addEventListener("click", function() {
        if (turn && !won) {
            glowYellow()
            if (pattern[userIndex] !== 'y') {
                flash();
                fail = true;
                turn = false;
                if (strict) {
                    rounds = 1
                }
                startGame();
                return;
            }
            userIndex ++;
            if (userIndex === rounds) {
                fail = false;
                turn = false;
                startGame();
                return;
            }
        }
    })

}

main()