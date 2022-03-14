export function toggleClass(num) {
	let selectedDiv = document.querySelector(`.rainbow${num}`)
	selectedDiv.classList.toggle('rainbow')
}
export function toggleSize (num) {
	if(num==1) return <FontAwesomeIcon className="speaker1 speaker" icon={faVolumeOff}></FontAwesomeIcon>
	if(num==2) return <FontAwesomeIcon className="speaker2 speaker" icon={faVolumeDown}></FontAwesomeIcon>
	if(num==3) return <FontAwesomeIcon className="speaker3 speaker" icon={faVolumeUp}></FontAwesomeIcon>
}