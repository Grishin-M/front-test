const button = document.querySelector('button');

button.onclick = function () {
	console.log('Grishin-M');
}

button.addEventListener('click', function (event) {
	event.preventDefault()
})
