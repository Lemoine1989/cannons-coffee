const form = document.querySelector("form");

let ordersList = [];

function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());
	console.log(dataObject);
	form.reset();

	ordersList.push(dataObject);
	console.log(ordersList);
}

form.addEventListener("submit", onFormSubmit);

