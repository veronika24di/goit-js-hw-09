function getRandomHexColor() {
const hexChars = '0123456789ABCDEF';
let hexColor = '#';
for (let i = 0; i < 6; i++) {
hexColor += hexChars[Math.floor(Math.random() * 16)];
}
return hexColor;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let intervalId;

startButton.addEventListener('click', function() {
intervalId = setInterval(function() {
document.body.style.backgroundColor = getRandomHexColor();
}, 1000);
});

stopButton.addEventListener('click', function() {
clearInterval(intervalId);
});
