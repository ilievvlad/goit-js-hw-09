const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
btnStop.disabled = true;
let intervalId = null;

btnStart.addEventListener("click", changeColor);
btnStop.addEventListener("click", stopChange);

function changeColor() {
	intervalId = setInterval(() => {
		document.body.style.backgroundColor = getRandomHexColor();
	}, 1000);
	btnStart.disabled = true;
	btnStop.disabled = false;
}
function stopChange() {
	clearInterval(intervalId);
	btnStop.disabled = true;
	btnStart.disabled = false;
}
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
