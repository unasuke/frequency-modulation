import Head from "next/head";
import EpisodeList from "../components/EpisodeList";
import { EpisodeData } from "../interfaces";
import Hero from "../components/Hero";
import { getEpisodeData } from "../lib/api";
import { GetStaticProps } from "next";

function Index({ episodes }) {
  return (
    <>
      <Head>
        <title>unasuke.fm</title>
        <meta property="og:title" content="unasuke.fm" />
      </Head>
      <Hero />
      <EpisodeList episodes={episodes} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const episodes: Array<EpisodeData> = getEpisodeData();

  return {
    props: {
      episodes,
    },
  };
};

export default Index;
