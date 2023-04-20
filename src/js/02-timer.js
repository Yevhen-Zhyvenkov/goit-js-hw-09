import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const inputDate = document.querySelector('#datetime-picker');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const startButton = document.querySelector('[data-start]');
let timerInterval = null;

startButton.disabled = true;

inputDate.style.fontSize = '35px';
startButton.style.fontSize = '35px';
dataDays.style.display = 'flex';
dataHours.style.display = 'flex';
dataMinutes.style.display = 'flex';
dataSeconds.style.display = 'flex';
dataDays.style.fontSize = '35px';
dataHours.style.fontSize = '35px';
dataMinutes.style.fontSize = '35px';
dataSeconds.style.fontSize = '35px';

function updateTimer() {
  const now = new Date();
  const endDate = new Date(inputDate.value);
  const diffMs = endDate.getTime() - now.getTime();
  
  if (diffMs <= 0) {
    clearInterval(timerInterval);
    dataDays.textContent = '00';
    dataHours.textContent = '00';
    dataMinutes.textContent = '00';
    dataSeconds.textContent = '00';

    return;
  }
  const { days, hours, minutes, seconds } = convertMs(diffMs);
  dataDays.textContent = addLeadingZero(days);
  dataHours.textContent = addLeadingZero(hours);
  dataMinutes.textContent = addLeadingZero(minutes);
  dataSeconds.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startButton.addEventListener('click', () => {
  timerInterval = setInterval(updateTimer, 1000);
  startButton.disabled = true;
});
function addLeadingZero(value) {

  return String(value).padStart(2, '0');
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    if (selectedDate <= currentDate) {
      Notiflix.Notify.warning("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};
flatpickr(inputDate, options);










































































