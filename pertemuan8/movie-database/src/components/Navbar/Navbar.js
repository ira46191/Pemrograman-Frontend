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
              <Link to="/">Home</Link>
            </li>
            <li class={styles.navbar__item}>
              <Link to="/movie/create">Add Movie</Link>
            </li>
            <li class={styles.navbar__item}>
              <Link to="/movie/popular">Popular</Link>
            </li>
            <li class={styles.navbar__item}>
              <Link to="/movie/now">Now Playing</Link>
            </li>
            <li class={styles.navbar__item}>
              <Link to="/movie/top">Top Rated</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
