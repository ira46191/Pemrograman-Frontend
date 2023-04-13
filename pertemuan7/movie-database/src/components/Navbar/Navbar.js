import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div class={styles.container}>
      <nav class={styles.navbar}>
        <div>
          <h1 class={styles.navbar__brand}>Movie App</h1>
        </div>
        <div>
          <ul class={styles.navbar__list}>
            <li class={styles.navbar__item}>Home</li>
            <li class={styles.navbar__item}>Add Movie</li>
            <li class={styles.navbar__item}>Popular</li>
            <li class={styles.navbar__item}>Now Playing</li>
            <li class={styles.navbar__item}>Top Rated</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
