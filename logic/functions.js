export function toggleClass(num) {
	let selectedDiv = document.querySelector(`.rainbow${num}`)
	selectedDiv.classList.toggle('rainbow')
}