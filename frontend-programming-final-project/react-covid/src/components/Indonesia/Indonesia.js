import styles from "./Indonesia.module.css";
import Indonesia2 from "../Indonesia2/Indonesia2";
import data from "../../utils/constants/indonesia";
function Indonesia() {
    const global = data.indonesia;
//   const { indonesia, setIndonesia } = props;

//   setIndonesia([...indonesia,]);
  return (
    <div class={styles.indonesia__container}>
      <section class={styles.indonesia}>
        <h1 class={styles.indonesia__title}>Indonesia</h1>
        <p class={styles.indonesia__description}>
          Data Covid Berdasarkan Indonesia
        </p>
        <div class={styles.indonesia__container}>
          {global.map(function (indonesia2) {
            return <Indonesia2 indonesia2={indonesia2}/>;
          })}
        </div>
      </section>
    </div>
  );
}

export default Indonesia;
