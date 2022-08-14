import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'

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
