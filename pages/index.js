import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
    return (
      <div className="">
        <Head>
          <title>Airbnb Clone by Sergio</title>
          <link rel="icon" href="/airbnb.ico"/>
        </Head>
        <Header/>
      </div>
    )
}