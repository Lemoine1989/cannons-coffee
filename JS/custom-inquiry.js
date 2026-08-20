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

let name = annieCannons;
let coffee = 
let story = `Thank you ${name}! We appreciate your interest in ${coffee-employment}. Your favorite coffee flavor is ${flavor} and your comments are $ {comments}. We will soon contact you at ${email} or ${phone}."