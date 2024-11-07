let power = 0;
let start = 0;
let score = 0;
let rounds = 0;
let intervalId;
let pattern = [];
const choices = ['g', 'r', 'b', 'y'];

const power_input = document.getElementById("power")
const start_button = document.getElementById("start")
const box_divs = document.querySelectorAll(".box")
const greenBox_div = document.getElementById("green")
const redBox_div = document.getElementById("red")
const yellowBox_div = document.getElementById("yellow")
const blueBox_div = document.getElementById("blue")
const count_div = document.querySelector(".count-box")

function glowGreen() {
    greenBox_div.classList.add("green-glow")
    setTimeout(() => greenBox_div.classList.remove("green-glow"), 300);
}

function glowRed() {
    greenBox_div.classList.add("red-glow")
    setTimeout(() => greenBox_div.classList.remove("red-glow"), 300);
}

function glowBlue() {
    greenBox_div.classList.add("blue-glow")
    setTimeout(() => greenBox_div.classList.remove("blue-glow"), 300);
}

function glowYellow() {
    greenBox_div.classList.add("yellow-glow")
    setTimeout(() => greenBox_div.classList.remove("yellow-glow"), 300);
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

function generatePattern() {
    for (let i = 0; i < 20; i ++) {
        index = Math.floor(Math.random() * 4)
        pattern.push(choices[index])
    }
}

function startGame() {
    generatePattern()
    let box = pattern[0]
    intervalId = setInterval(() => {
        
    }, 500);
}

function main() {
    power_input.addEventListener("click", function() {
        if (power_input.checked) {
            power = 1
            count_div.innerHTML = "-"
        } else {
            power = 0
            count_div.innerHTML = ""
        }
    })

    start_button.addEventListener("click", function() {
        if (power) {
            start = 1;
            pattern = [];
            startGame()
        }
    })

}

main()