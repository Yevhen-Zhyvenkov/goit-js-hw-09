const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
buttonStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
buttonStart.addEventListener('click', onClickStart);  
function onClickStart() {
  timerId = setInterval(() => {
    buttonStart.disabled = true;
    buttonStop.disabled = false;
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

buttonStop.addEventListener('click', onClickStop);
function onClickStop() {
  clearInterval(timerId);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
};
 




























































