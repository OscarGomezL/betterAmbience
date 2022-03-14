import SoundRange from './SoundRange'
import { toggleClass } from '../logic/functions'

export default function AudioToggler({index}) {
	return (
		<div className={`audioToggler rainbow${index}`}>
			<div className="audioToggler-container">
				<div className="audioToggler-icon_container" onClick={()=>{toggleClass(index)}}>
					<div className="audioToggler-icon">
						AudioToggler {index}
					</div>
				</div>
				<SoundRange/>
			</div>
		</div>
	)
}