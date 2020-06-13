import Head from 'next/head'
import EpisodeList from '../components/EpisodeList'
import Episode from '../components/Episode'

function Index(query: any) {
  const episodes = query.episodes
  return <div>
    <Head>
      <title>unasuke.fm</title>
      <meta property="og:title" content="unasuke.fm" />
    </Head>
    <h1>unasuke.fm</h1>
    <p>
      episodes
    </p>
   <EpisodeList episodes={episodes} />
  </div>
}

Index.getInitialProps = async({query}) => {
  return { ...query }
}

export default Index