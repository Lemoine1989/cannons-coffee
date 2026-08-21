const form = document.querySelector("form");



function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());
	console.log(dataObject);
	form.reset();

	`Thank you ${name}! We appreciate your interest in ${employment}. Your favorite coffee flavor is ${vanilla/caramel/hazelnut} and your comments are ${comments}. We will soon contact you at ${email} or ${number}.`
}
form.addEventListener("submit", onFormSubmit);

 