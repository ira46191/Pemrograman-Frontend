import styles from "./Hero.module.css";
function Hero() {
  return (
    <div class={styles.container}>
    <section class={styles.hero}>
      <div class={styles.hero__left}>
        <h2 class={styles.hero__title}>Covid ID</h2>
        <h4 class={styles.hero__genre}>Monitoring Perkembangan Covid-19</h4>
        <p class={styles.hero__description}>
        Pandemi Covid-19 melanda dunia, dan Indonesia termasuk di dalamnya. Indonesia berjuang melawan Covid-19 dengan memodifikasi kebijakan karantina wilayah (lockdown) menjadi pembatasan sosial berskala besar (PSBB) yang bersifat lokal sesuai tingkat keparahan di wilayah provinsi, kabupaten, atau kota. Data yang disajikan berdasarkan provinsi yang ada di seluruh indonesia
        </p>
        <button class={styles.hero__button}>Vaccine</button>
      </div>
      <div class={styles.hero__right}>
      <img class={styles.hero__image} src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?w=740&t=st=1682427941~exp=1682428541~hmac=a06d883f47f8699c7627e23524ca6f3e1242e10ba0d2a55a55d2a8e2ac074d25" alt="" />
      </div>
    </section>
  </div>
  );
}

export default Hero;
