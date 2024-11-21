console.log('Grishin-M');
const button = document.querySelector('button');

button.onclick = function () {
	console.log('click button');
}

button.addEventListener('click', function (event) {
	event.preventDefault()
})
