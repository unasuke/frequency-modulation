import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <h1 className={styles.hero}>
        <img src={"/logo.svg"} alt="unasuke.fm" className={styles.logo} />
      </h1>
    </>
  );
}
