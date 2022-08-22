import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'

export default function Home() {
	return (
		<div>
			<Head>
				<title>betterAmbience</title>
				<meta name="description" content="betterAmbience" />
				<link rel="icon" href="https://i.imgur.com/CiSmn0s.png" />
			</Head>
			<Header/>
			<Main/>
			<Footer/>
		</div>
	)
}
