import AudioToggler from "./audioToggler"
import Presets from "./preset/presets"

export default function Main() {
	let arr = []
	for(let i = 1; i<=12; i++) arr.push(i)
	return (
		<main>
			<Presets/>
			{arr.map(num=><AudioToggler key={num} index={num}/>)}
		</main>
	)
}
