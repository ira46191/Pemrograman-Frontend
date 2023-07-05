import styles from "./Provinces.module.css";

function Provinces(props) {
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
              <td>{provinsi.kota}</td>
              <td>{provinsi.positif}</td>
              <td>{provinsi.sembuh}</td>
              <td>{provinsi.dirawat}</td>
              <td>{provinsi.meninggal}</td>
            </tr>
          ))}
          </table>
        </aside>
      </section>
    </div>
  );
}

export default Provinces;
