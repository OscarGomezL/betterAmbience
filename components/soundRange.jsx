import { useState } from "react"
import { toggleSize } from "../js/functions"
import { useEffect } from "react"

export default function SoundRange({changeVolume}) {
	const [range, setRange] = useState(5)
	useEffect(() => {
		changeVolume(range/10)
	}, [range])
	return (
		<div className="sound_range">
			<input 
				type="range"
				min={0}
				max={10}
				value={range}
				onChange={e=>{setRange(e.target.value)}}
			/>
			{toggleSize(range)}
		</div>
	)
}
