import styles from "./EpisodeList.module.css";
import Link from "next/link";
import { EpisodeData } from "../interfaces";

function EpisodeList(props) {
  const episodes: Array<EpisodeData> = props.episodes;

  const listItems = episodes.map((episode) => (
    <li key={episode.id} className={styles.episode}>
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
                <span className={styles.name}>@{guest.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <Link href="/ep/[id]" as={`/ep/${episode.id}`}>
          <a>Read more</a>
        </Link>
      </article>
    </li>
  ));
  return (
    <section className={styles.wrapper}>
      <ul className={styles.episodes}>{listItems}</ul>
    </section>
  );
}

export default EpisodeList;
