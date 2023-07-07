import styles from "./Provinces.module.css";

function Provinsi(props) {
  const {provinsi, bussumem} = props;
  
  return (
    <div className={styles.container}> 
      <section className={styles.provinsi}>
        <h1 className={styles.provinsi__title}>Provinsi</h1>
        <p className={styles.provinsi__description}>
          Data Covid Berdasarkan Provinsi
        </p>
        <aside className={styles.provinsi__container}>
          <table className={styles.table}>
            <tr className={styles.tr}>
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
              <td>{provinsi.name || provinsi.kota}</td>
              <td>{provinsi.numbers.confirmed || provinsi.positif}</td>
              <td>{provinsi.numbers.recovered || provinsi.sembuh}</td>
              <td>{provinsi.numbers.treatment || provinsi.dirawah}</td>
              <td>{provinsi.numbers.death || provinsi.meninggal}</td>
            </tr>
          ))}
          </table>
        </aside>
      </section>
    </div>
  );
}

export default Provinsi;
