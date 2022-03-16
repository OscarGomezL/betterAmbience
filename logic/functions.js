import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVolumeOff, faVolumeUp, faVolumeDown} from '@fortawesome/free-solid-svg-icons'
import {faDove, faTree,faCoffee, faFire, faCloudRain, faWater, faClock, faKeyboard, faTrain, faBolt, faHeart, faBug} from '@fortawesome/free-solid-svg-icons'

export function toggleClass(num) {
	let selectedDiv = document.querySelector(`.rainbow${num}`)
	selectedDiv.classList.toggle('rainbow')
}
export function toggleSize(num) {
	if(num<=3) return <FontAwesomeIcon className="speaker1 speaker" icon={faVolumeOff}></FontAwesomeIcon>
	if(num<=6) return <FontAwesomeIcon className="speaker2 speaker" icon={faVolumeDown}></FontAwesomeIcon>
	if(num<=10) return <FontAwesomeIcon className="speaker3 speaker" icon={faVolumeUp}></FontAwesomeIcon>
}
export function getIcon(num) {
	if(num==0) return faDove
	else if(num==1) return faTree
	else if(num==2) return faCoffee
	else if(num==3) return faFire
	else if(num==4) return faCloudRain
	else if(num==5) return faWater
	else if(num==6) return faClock
	else if(num==7) return faKeyboard
	else if(num==8) return faTrain
	else if(num==9) return faBug
	else if(num==10) return faHeart
	else if(num==11) return faBolt
}
export function returnFileName (num) {
    if(num==1) return 'aves'
    else if(num==2) return 'bosque'
    else if(num==3) return 'café'
    else if(num==4) return 'fogata'
    else if(num== 5) return 'lluvia'
    else if(num==6) return 'olas'
    else if(num==7) return 'reloj'
    else if(num==8) return 'teclado'
    else if(num==9) return 'tren'
    else if(num==10) return 'crickets'
    else if(num==11) return 'heart'
    else if(num==12) return 'thunders'
}