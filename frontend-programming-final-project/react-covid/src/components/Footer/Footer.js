import styles from "./Footer.module.css";
function Footer() {
  return (
    <div class={styles.container}> 
      <footer class={styles.footer}>
        <h2 class={styles.footer__title}>Covid ID <br /><p class={styles.author}>Developed by Ira Kusuma Wardani</p></h2>
        <div>
          <ul class={styles.footer__list}>
            <li class={styles.footer__item}>Global</li>
            <li class={styles.footer__item}>Indonesia</li>
            <li class={styles.footer__item}>Provinsi</li>
            <li class={styles.footer__item}>About</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
