import SoundRange from './SoundRange'
import { getIcon, toggleClass } from '../logic/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function AudioToggler({index}) {
	return (
		<div className={`audioToggler rainbow${index}`}>
			<div className="audioToggler-container">
				<div className="audioToggler-icon_container" onClick={()=>{toggleClass(index)}}>
					<FontAwesomeIcon icon={getIcon(index-1)} className="audioToggler_icon"></FontAwesomeIcon>
				</div>
				<SoundRange/>
			</div>
		</div>
	)
}