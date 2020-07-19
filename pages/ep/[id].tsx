import { useRouter } from "next/router";
import { EpisodeData } from "../../interfaces";
import Hero from "../../components/Hero";
import styles from "./[id].module.css";
import { getEpisodeData } from "../../lib/api";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import Footer from "../../components/Footer";
import Head from "next/head";

function Episode({ episode }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>{`ep${episode.id} "${episode.title}" - unasuke.fm`}</title>
      </Head>
      <div style={{ display: "flex", flexFlow: "column", minHeight: "100vh" }}>
        <Link href="/">
          <a>
            <Hero />
          </a>
        </Link>
        <div className={styles.wrapper}>
          <section className={styles.episode}>
            <article className={styles.entry}>
              <section className={styles.header}>
                <div>{episode.date}</div>
                <div className={styles.id}>#{episode.id}</div>
              </section>
              <h1 className={styles.title}>{episode.title}</h1>
              <ul className={styles.guests}>
                {episode.guests.map((guest, index) => (
                  <li key={index} className={styles.guest}>
                    <a href={`https://twitter.com/${guest.twitter}`}>
                      <img
                        src={`https://unavatar.now.sh/twitter/${guest.twitter}`}
                        className={styles.avatar}
                        alt={guest.twitter}
                      />
                      <span className={styles.name}>@{guest.twitter}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <audio
                controls
                preload={"metadata"}
                src={episode.url}
                className={styles.audio}
              />
            </article>
          </section>
          <Link href={"/"}>
            <a>Back to top</a>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const episodes: Array<EpisodeData> = getEpisodeData();
  const episode = episodes.find((ep) => ep.id.toString() === context.params.id);

  return {
    props: {
      episode,
    },
  };
};

export async function getStaticPaths() {
  const episodes: Array<EpisodeData> = getEpisodeData();

  const paths = episodes.map((ep) => {
    return { params: { id: ep.id } };
  });

  return { paths, fallback: false };
}

export default Episode;
