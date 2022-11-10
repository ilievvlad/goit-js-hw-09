import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
	e.preventDefault();
	let delayPromise = Number(delay.value);

	for (let i = 1; i <= amount.value; i += 1) {
		createPromise(i, delayPromise).then(onSuccess).catch(onError);
		delayPromise += Number(step.value);
	}
}
function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (shouldResolve) {
				resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
			}
			reject(`❌ Rejected promise ${position} in ${delay}ms`);
		}, delay);
	});
}

function onSuccess(result) {
	Notiflix.Notify.success(result);
}
function onError(error) {
	Notiflix.Notify.failure(error);
}