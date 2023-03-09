function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let intervalId;

stopButton.disabled = true;

startButton.addEventListener('click', function() {
  startButton.disabled = true;
  stopButton.disabled = false;
  intervalId = setInterval(function() {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopButton.addEventListener('click', function() {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
});