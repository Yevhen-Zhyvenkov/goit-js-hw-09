
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    }
  
buttonStart.addEventListener("click", () => {
    timerId = setInterval(() => {
        const colorize = getRandomHexColor();
        buttonStart.disabled = true;
        document.body.style.backgroundColor = colorize;
}, 1000);
});

buttonStop.addEventListener("click", () => {
  buttonStart.disabled = false;
  clearInterval(timerId);
});















