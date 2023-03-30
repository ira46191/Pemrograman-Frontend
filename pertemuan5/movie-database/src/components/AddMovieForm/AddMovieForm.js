import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
  return (
    <div class={styles.container}>
      <section class={styles.addmovieform}>
        <div class={styles.addmovieform__imageleft}>
          <img
            class={styles.addmovieform__image}
            src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/09/30/1320038458.jpg"
            alt=""
          />
        </div>
        <div class={styles.addmovieform__right}>
          <h2 class={styles.addmovieform__title}>Add Movie</h2>
          <label class={styles.addmovieform__title1}>Title</label>
          <div class={styles.addmoviefor__content1}>
            <input class={styles.addmovieform__input1} type="text" />
          </div>
        <div class={styles.addmovieform__form1}>
          <label class={styles.addmovieform__title2}>Year</label>
          <div class={styles.addmoviefor__content1}>
            <input class={styles.addmovieform__input2} type="text" />
          </div>
          <button class={styles.addmovieform__button}>Watch</button>
        </div>
        </div>
      </section>
    </div>
  );
  
}
export default AddMovieForm;
