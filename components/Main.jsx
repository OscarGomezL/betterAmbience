import AudioToggler from "./AudioToggler"

export default function Main() {
	let arr = []
	for(let i = 1; i<=10; i++) arr.push(i)
	return (
		<main>
			{arr.map(num=><AudioToggler key={num} index={num}/>)}
		</main>
	)
}