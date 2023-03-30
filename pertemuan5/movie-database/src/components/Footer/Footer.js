import styles from "./Footer.module.css";

function Footer() {
  return (
    <div class={styles.container}>
      <footer class={styles.footer}>
        <h2 class={styles.footer__title}>Movie App</h2>
        <p class={styles.footer__author}>Created by aufa</p>
      </footer>
    </div>
  );
}
export default Footer;
