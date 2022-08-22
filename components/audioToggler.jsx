import SoundRange from './soundRange'
import { useState } from 'react'
import { getIcon, toggleClass, returnFileName } from '../js/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useSound from 'use-sound'

export default function AudioToggler({index}) {
	const [isPlaying, setIsPlaying] = useState(true)
	const [volume, setVolume] = useState(0.5)
    const [play, {stop}] = useSound(`/sounds/${returnFileName(index)}.mp3`,{volume, loop: true})
	const soundToggler = (index) => {
		isPlaying ? play() : stop();
		setIsPlaying(!isPlaying)
		toggleClass(index)
	}
	return (
		<div className={`audioToggler rainbow${index}`}>
			<div className="audioToggler-container">
				<div 
					className="audioToggler-icon_container"
					onClick={()=>{soundToggler(index)}}
					title={returnFileName(index)}
				>
					<FontAwesomeIcon icon={getIcon(index-1)} className="audioToggler_icon"></FontAwesomeIcon>
				</div>
				<SoundRange changeVolume={setVolume}/>
			</div>
		</div>
	)
}
