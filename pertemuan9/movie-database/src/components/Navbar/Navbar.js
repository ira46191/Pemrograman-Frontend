import { Link } from "react-router-dom";
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
            <li class={styles.navbar__item}>
              <Link className={styles.navbar_link} to="/">Home</Link>
            </li>
            <li class={styles.navbar__item}>
              <Link className={styles.navbar_link} to="/movie/create">Add Movie</Link>
            </li>
            <li class={styles.navbar__item}>
              <Link className={styles.navbar_link} to="/movie/popular">Popular</Link>
            </li>
            <li class={styles.navbar__item}>
              <Link className={styles.navbar_link} to="/movie/now">Now Playing</Link>
            </li>
            <li class={styles.navbar__item}>
              <Link className={styles.navbar_link} to="/movie/top">Top Rated</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
