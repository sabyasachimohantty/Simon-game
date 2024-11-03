let power = 0;
let start = 0;
let score = 0;

const power_input = document.getElementById("power")


function main() {
    power_input.addEventListener("click", function() {
        if (power_input.checked) {
            power = 1
        } else {
            power = 0
        }
        console.log(power)
    })
}

main()