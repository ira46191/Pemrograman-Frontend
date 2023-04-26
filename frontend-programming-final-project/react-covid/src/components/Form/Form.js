import { useState } from "react";
import styles from "./Form.module.css";

function Form(props) {
  const { provinsi, setProvinsi } = props;

  // membuat state kota, status, dan jumlah
  const [kota, setKota] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");

  // membuat fungsi handleKota, handleStatus, dan handleJumlah
  function handleKota(e) {
    setKota(e.target.value);
  }

  function handleStatus(e) {
    setStatus(e.target.value);
  }

  function handleJumlah(e) {
    setJumlah(e.target.value);
  }

  // membuat handleSubmit untuk mengsubmit form 
  function handleSubmit(e) {
    e.preventDefault();

    const covid = provinsi.map((provinsi) =>
    provinsi.kota === kota
    ? {
      ...provinsi,
      [status]: parseInt(jumlah) + parseInt(provinsi[status]),
    }
    : provinsi
  );

    setProvinsi(covid);
  }
  return (
    <div class={styles.container}>
      <section class={styles.form}>
        <div class={styles.form__left}>
          <img
            class={styles.form__image}
            src="https://img.freepik.com/free-vector/editorial-commission-concept-illustration_114360-7751.jpg?w=740&t=st=1682429810~exp=1682430410~hmac=ea1f4041e4bdf94f52041b2fa00067fbd9647a872381136b322d5d635e975d0e"
            alt=""
          />
        </div>
        <div class={styles.form__right}>
          <h2 class={styles.form__title}>Form Covid</h2>
          <form onSubmit={handleSubmit}>
            <div class={styles.form__group}>
              <label htmlFor="provinsi" class={styles.form__label}>
                Provinsi
              </label>
              <select
                onChange={handleKota}
                id="provinsi"
                name="provinsi"
                class={styles.form__input}
                type="text"
                value={kota}
              >
                {provinsi.map((provinsi, index) => (
                  <option key={index} value={provinsi.kota}>{provinsi.kota}</option>
                ))}
              </select>
            </div> 
            <div class={styles.form__group}>
              <label htmlFor="status" class={styles.form__label}>
                Status
              </label>
              <input
                onChange={handleStatus}
                id="status"
                name="status"
                class={styles.form__input}
                type="text"
                value={status}
              />
            </div>

            <div class={styles.form__group}>
              <label htmlFor="jumlah" class={styles.form__label}>
                Jumlah
              </label>
              <input
                onChange={handleJumlah}
                id="jumlah"
                name="jumlah"
                class={styles.form__input}
                type="number"
                value={jumlah}
              />
            </div>
            <button class={styles.form__button}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;
