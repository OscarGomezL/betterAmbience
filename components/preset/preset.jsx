export default function Preset({info}) {
	function toggle() {
		for(let i=0; i<info.sounds.length; i++) {
			document.querySelector(`.toggler_${info.sounds[i].soundIndex}`).click()
		}
	}
	return (
		<div 
			className="preset"
			onClick={toggle}
		>
			{info.name}
		</div>
	)
}