import styles from "./Indonesia2.module.css"

function Indonesia2(props) {
    // Destructing object props
    const { indonesia2 } = props;
  return (
    <div class={styles.indonesia2}>
      <div class={styles.card}>
      <h3 class={styles.indonesia2__title}>{indonesia2.status}</h3> 
      <p class={styles.indonesia2__total}>{indonesia2.total}</p>
      </div>
    </div>
  );
}
export default Indonesia2;
