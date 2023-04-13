import styles from "./AddMovieForm.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";

function AddMovieForm(props) {
  // destructing props
  const { movies, setMovies } = props;
  // membuat state title
  const [title, setTitle] = useState("");
  // membuat state year
  const [year, setYear] = useState("");
  // membuat state poster
  const [poster, setPoster] = useState("");
  // membuat state title dan year error/empty
  const [isTitleError, setTitleError] = useState(false);
  const [isYearError, setYearError] = useState(false);
  const [isPosterError, setPosterError] = useState(false);

  // membuat fungsi handleTitle
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  // membuat fungsi handleYear
  function handleYear(e) {
    setYear(e.target.value);
  }
  // handle fungsi handlePoster
  function handlePoster(e) {
    setPoster(e.target.value);
  }
  // handle form ketika disubmit
  function handleSubmit(e) {
    // mencegah perilaku default : refresh
    e.preventDefault();

    // jika title kosong, maka set error title jadi True
    if (title === "") {
      setTitleError(true);
    }
    // jika year kosong, maka set error year true
    else if (year === "") {
      setTitleError(false);
      setYearError(true);
    }
    // jika poster kosong, maka set error poster true
    else if (poster === "") {
      setPosterError(true);
      setTitleError(false);
      setYearError(false);
    }
    // jika tidak kosong, tambah data
    else {
      // siapkan movie yang ingin diinput
      const movie = {
        id: nanoid(),
        title: title,
        year: year,
        type: "Movie",
        poster: poster,
      };
      setMovies([...movies, movie]);
      setTitleError(false);
      setYearError(false);
      setPosterError(false);
    }
  }
  return (
    <div class={styles.container}>
      <section class={styles.form}>
        <div class={styles.form__left}>
          <img
            class={styles.form__image}
            src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/09/30/1320038458.jpg"
            alt=""
          />
        </div>
        <div class={styles.form__right}>
          <h2 class={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div class={styles.form__group}>
              <label htmlFor="title" class={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                class={styles.form__input}
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleTitle}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div class={styles.form__group}>
              <label htmlFor="year" class={styles.form__label}>
                Year
              </label>
              <input
                id="year"
                class={styles.form__input}
                type="src"
                name="year"
                // Memberikan value input: date
                value={year}
                // Memberikan event onChange
                onChange={handleYear}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isDateError true maka render error
               */}
              {isYearError && <Alert>Year Wajib Diisi</Alert>}
            </div>
            <div class={styles.form__group}>
                <label class={styles.form__label} htmlFor="poster">Link Film</label>
                <input
                  type="url"
                  onChange={handlePoster}
                  value={poster}
                  id="poster"
                  name="poster"
                  class={styles.form__input1}
                />
                <div class={styles.form__group1}>
                <select class={styles.form__input1} name="movie" id="list">
                  <option value="action">Action</option>
                  <option value="drama">Drama</option>
                  <option value="horor">Horor</option>
                  <option value="comedy">Comedy</option>
                </select>
                </div>
                {isPosterError && <Alert>Link Wajib Diisi</Alert>}
              </div>
            <div>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
