import Preset from './preset'

export default function Presets() {
	let presets = [
		{
			name: 'Camping Night',
			sounds: [{soundIndex:2,volume:1},{soundIndex:10,volume:4},{soundIndex:4,volume:10}]
		},
		{
			name: 'Work In The Office',
			sounds: [{soundIndex:8,volume:1},{soundIndex:7,volume:1},{soundIndex:3,volume:1}]
		},
		{
			name: 'Going Home From Work',
			sounds: [{soundIndex:9,volume:1},{soundIndex:3,volume:1},{soundIndex:5,volume:2}]
		},
		{
			name: 'At Home In a Rainy Day',
			sounds: [{soundIndex:12,volume:1},{soundIndex:5,volume:2},{soundIndex:8,volume:5}]
		}
	]
	return (
		<section className="preset_container">
			{presets.map((preset, index)=><Preset info={preset} key={index}/>)}
		</section>
	)
}