import Head from "next/head";
import EpisodeList from "../components/EpisodeList";
import { EpisodeData } from "../interfaces";
import Hero from "../components/Hero";
import { getEpisodeData } from "../lib/api";
import { GetStaticProps } from "next";
import Footer from "../components/Footer";

function Index({ episodes }) {
  return (
    <>
      <Head>
        <title>unasuke.fm</title>
        <meta property="og:title" content="unasuke.fm" />
      </Head>
      <div style={{ display: "flex", flexFlow: "column", minHeight: "100vh" }}>
        <Hero />
        <EpisodeList episodes={episodes} />
        <Footer />
      </div>
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
