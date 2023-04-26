import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div class={styles.container}>
      <nav class={styles.navbar}>
        <div>
          <h1 class={styles.navbar__brand}>Covid ID</h1>
        </div>
        <div>
          <ul class={styles.navbar__list}>
            <li class={styles.navbar__item}>Global</li>
            <li class={styles.navbar__item}>Indonesia</li>
            <li class={styles.navbar__item}>Provinsi</li>
            <li class={styles.navbar__item}>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
