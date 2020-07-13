import Head from 'next/head'
import EpisodeList from '../components/EpisodeList'
import { EpisodeData } from "../interfaces";
import Hero from "../components/Hero";
import {getEpisodeData} from "../lib/api";

function Index({ episodes }) {
  return <>
    <Head>
      <title>unasuke.fm</title>
      <meta property="og:title" content="unasuke.fm" />
    </Head>
    <Hero />
    <EpisodeList episodes={episodes} />
  </>
}

export async function getStaticProps(context) {
  const episodes: Array<EpisodeData> = getEpisodeData()

  return {
    props: {
      episodes
    }
  }
}

export default Index
