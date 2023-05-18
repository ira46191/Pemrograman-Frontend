import styles from "./Provinces.module.css";
// import Provinsi from "../Provinsi/Provinsi";
// import data from "../../utils/constants/provinces";
function Provinces(props) {
  const {provinsi} = props;
  return (
    <div class={styles.container}> 
      <section class={styles.provinsi}>
        <h1 class={styles.provinsi__title}>Provinsi</h1>
        <p class={styles.provinsi__description}>
          Data Covid Berdasarkan Provinsi
        </p>
        <div class={styles.provinsi__container}>
          <table class={styles.table}>
            <tr class={styles.tr}>
              <th>No</th>
              <th>Provinsi</th> 
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
             {provinsi.map((provinsi, index) => (
            <tr key={index} className={styles.tr2}>
              <td>{index + 1}</td>
              <td>{provinsi.kota}</td>
              <td>{provinsi.positif}</td>
              <td>{provinsi.sembuh}</td>
              <td>{provinsi.dirawat}</td>
              <td>{provinsi.meninggal}</td>
            </tr>
          ))}
          </table>
        </div>
      </section>
    </div>
  );
}

export default Provinces;
