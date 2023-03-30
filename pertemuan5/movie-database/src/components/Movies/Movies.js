import styles from "./Movies.module.css";
function Movies() {
  return (
    <div class={styles.movies}>
      <section class={styles.movies}>
        <h2 class={styles.movies__title}>Latest Movie</h2>
        <div class={styles.movie__container}>
          <div class={styles.movie}>
            <img class={styles.movie__image} src="https://upload.wikimedia.org/wikipedia/id/e/e4/A_Korean_Odyssey_%28Hwayugi%29.jpg" alt="" />
            <h3 class={styles.movie__title}>Hwayugi</h3>
            <h3 class={styles.movie__title}>화유기</h3>
            <p class={styles.movie__date}>2017</p>
          </div>
          <div class={styles.movie}>
            <img class={styles.movie__image} src="https://www.tentangsinopsis.com/wp-content/uploads/2022/11/IMG_20221113_093028.jpg" alt="" />
            <h3 class={styles.movie__title}>Weak Hero</h3>
            <h3 class={styles.movie__title}>Class 1</h3>
            <p class={styles.movie__date}>2022</p>
          </div>
          <div class={styles.movie}>
            <img class={styles.movie__image} src="https://www.tentangsinopsis.com/wp-content/uploads/2021/03/Taxi-Driver-Drama-Korea-2021.jpg" alt="" />
            <h3 class={styles.movie__title}>Taxi Driver</h3>
            <h3 class={styles.movie__title}>Season 1</h3>
            <p class={styles.movie__date}>2021</p>
          </div>
          <div class={styles.movie}>
            <img class={styles.movie__image} src="https://upload.wikimedia.org/wikipedia/id/3/3e/Hometown_Cha-Cha-Cha.jpg" alt="" />
            <h3 class={styles.movie__title}>Hometown Cha-Cha-Cha</h3>
            <p class={styles.movie__date}>2021</p>
          </div>
          <div class={styles.movie}>
            <img class={styles.movie__image} src="https://www.dreamers.id/img_editor/62339/images/1633575247-a.jpg" alt="" />
            <h3 class={styles.movie__title}>The World of</h3>
            <h3 class={styles.movie__title}>My 17</h3>
            <p class={styles.movie__date}>2020</p>
          </div>
          <div class={styles.movie}>
                <img class={styles.movie__image} src="https://upload.wikimedia.org/wikipedia/id/thumb/2/24/All_of_Us_Are_Dead.jpeg/250px-All_of_Us_Are_Dead.jpeg" alt="" />
            <h3 class={styles.movie__title}>All of Us </h3>
            <h3 class={styles.movie__title}>Are Dead</h3>
            <p class={styles.movie__date}>2022</p>
          </div>
          <div class={styles.movie}>
            <img class={styles.movie__image} src="https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_.jpg" alt="" />
            <h3 class={styles.movie__title}>Train to</h3>
            <h3 class={styles.movie__title}>Busan</h3>
            <p class={styles.movie__date}>2016</p>
          </div>
          <div class={styles.movie}>
            <img class={styles.movie__image} src="https://upload.wikimedia.org/wikipedia/id/2/25/Sweet_Home_poster.jpg" alt="" />
            <h3 class={styles.movie__title}>Sweet Home</h3>
            <h3 class={styles.movie__title}>스위트홈</h3>
            <p class={styles.movie__date}>2020</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movies;
