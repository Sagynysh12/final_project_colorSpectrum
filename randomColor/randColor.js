const hex = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    "A", "B", "C", "D", "E", "F"
];

const changeBtn = document.getElementById("changeBtn")
const color = document.getElementById("colorHex")
const background = document.querySelector('.backgroundColor')
changeBtn.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    background.style.background = hexColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

