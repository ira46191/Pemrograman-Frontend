import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(props) {
  const { movies, setMovies } = props;

  const [formData, setFormData] = useState({
    title: "",
    year: "",
    poster: "",
    type: "",
  });

  const [error, setError] = useState({
    isTitleError: false,
    isYearError: false,
    isPosterError: false,
  });
  
  function handleChange(e) {
    const { name, value } = e.target;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  
    setError({
      ...error,
      [name]: value === "", 
    });
  }
  
  function validate() {
    const { title, year, poster } = formData;
    const hasError = title === "" || year === "" || poster === "";

    if (title === ""){
      setError({
        isTitleError: true,
        isYearError: false,
        isPosterError: false
      });
    } else if (year === "") {
      setError({
        isTitleError: false,
        isYearError: true,
        isPosterError: false
      });
    } else if (poster === "") {
      setError({
        isTitleError: false,
        isYearError: false,
        isPosterError: true
      });
    } else {
      setError({
        isTitleError: false,
        isYearError: false,
        isPosterError: false
      });
    }
  
    return !hasError;
  }
  
  function addMovie() {
    const { title, year, type, poster } = formData;
    const movie = {
      id: nanoid(),
      title: title,
      year: year,
      type: type,
      poster: poster,
    };

    setMovies([...movies, movie]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate() && addMovie();
  }

  const { title, year, poster, type } = formData;
  const { isTitleError, isYearError, isPosterError } = error;

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/09/30/1320038458.jpg"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="year" className={styles.form__label}>
                Year
              </label>
              <input
                id="year"
                className={styles.form__input}
                type="text"
                name="year"
                value={year}
                onChange={handleChange}
              />
              {isYearError && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="poster" className={styles.form__label}>
                Poster
              </label>
              <input
                onChange={handleChange}
                id="poster"
                className={styles.form__input}
                name="poster"
                type="text"
                value={poster}
              />
              {isPosterError && <Alert>Poster Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="type" className={styles.form__label}>
                Type
              </label>
              <select
                id="type"
                className={styles.form__select}
                name="type"
                value={type}
                onChange={handleChange}
              >
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Horor">Horor</option>
              </select>
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
