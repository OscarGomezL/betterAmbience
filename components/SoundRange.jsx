import { useState } from "react"
import { toggleSize } from "../logic/functions"

export default function SoundRange() {
	const [range, setRange] = useState(5)
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