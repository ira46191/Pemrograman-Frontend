import styles from "./Hero.module.css";
function Hero() {
  return (
    <div class={styles.container}>
      <section class={styles.hero}>
        <div class={styles.hero__left}>
          <h2 class={styles.hero__title}>Hometown</h2>
          <h3 class={styles.hero__genre}>Genre : Drama, mystery</h3>
          <p class={styles.hero__description}>
          menceritakan misteri pembunuhan di kota kecil dengan petunjuk berupa kaset rekaman milik pembunuh berantai
          </p>
          <button class={styles.hero__button}>Watch</button>
        </div>
        <div class={styles.hero__right}>
        <img class={styles.hero__image} src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/09/30/1320038458.jpg" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
