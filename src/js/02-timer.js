import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const btnStart = document.querySelector('[data-start]');
btnStart.disabled = true;

const refs = {
	days: document.querySelector('[data-days]'),
	hours: document.querySelector('[data-hours]'),
	minutes: document.querySelector('[data-minutes]'),
	seconds: document.querySelector('[data-seconds]'),
};
const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,

	onClose(selectedDates) {
		const selectedDate = selectedDates[0].getTime();
		const currentDate = Date.now();
		if (currentDate > selectedDate) {
			Notiflix.Notify.failure('Please choose a date in the future');
			return;
		}
		btnStart.disabled = false;
	},
};
const timer = {
	intervalId: null,
	isActive: false,

	start() {
		if (this.isActive) {
			return;
		}
		const startTime = datePicker.selectedDates[0];
		this.isActive = true;

		this.intervalId = setInterval(() => {
			const currentTime = Date.now();
			const deltaTime = startTime - currentTime;
			if (deltaTime < 0) {
				clearInterval(this.intervalId);
				this.isActive = false;
				return;
			}
			const timeComponents = convertMs(deltaTime);
			updateClock(timeComponents);
		}, 1000);
	},
};

flatpickr('#datetime-picker', options);
const datePicker = flatpickr('#datetime-picker', options);

function convertMs(ms) {
	// Number of milliseconds per unit of time
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	// Remaining days
	const days = Math.floor(ms / day);
	// Remaining hours
	const hours = Math.floor((ms % day) / hour);
	// Remaining minutes
	const minutes = Math.floor(((ms % day) % hour) / minute);
	// Remaining seconds
	const seconds = Math.floor((((ms % day) % hour) % minute) / second);

	return { days, hours, minutes, seconds };
}
function pad(value) {
	return String(value).padStart(2, '0');
}

function updateClock({ days, hours, minutes, seconds }) {
	refs.days.textContent = pad(days);
	refs.hours.textContent = pad(hours);
	refs.minutes.textContent = pad(minutes);
	refs.seconds.textContent = pad(seconds);
}

btnStart.addEventListener('click', () => {
	timer.start();
});




