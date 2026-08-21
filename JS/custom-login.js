const form = document.querySelector("form");



function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());
	console.log(dataObject);
	form.reset();

	`Welcome, ${name}! You are logged in!`
}

form.addEventListener("submit", onFormSubmit);

