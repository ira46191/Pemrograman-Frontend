import styles from "./Countainer.module.css"; 

function Countainer({ children }){
    return (
        <div className={styles.countainer}>{ children }</div>
    )
}

export default Countainer;