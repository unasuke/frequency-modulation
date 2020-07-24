import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss, faList } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>This site using cookies for analytics.</p>
      <div className={styles.links}>
        <a className={styles.link} href={"https://github.com/unasuke/fm"}>
          <FontAwesomeIcon fixedWidth icon={faGithub} className={styles.icon} />
          Source
        </a>
        <Link href={"/feed.xml"}>
          <a className={styles.link}>
            <FontAwesomeIcon fixedWidth icon={faRss} className={styles.icon} />
            Feed
          </a>
        </Link>
        <a
          className={styles.link}
          href={"https://github.com/unasuke/fm/blob/master/CHANGELOG.md"}
        >
          <FontAwesomeIcon fixedWidth icon={faList} className={styles.icon} />
          Changelog
        </a>
      </div>
    </footer>
  );
}
