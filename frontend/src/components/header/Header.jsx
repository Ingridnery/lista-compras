import styles from './style.module.scss'

export default function Header(){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Green Shopping</h1>
            <img className={styles.logo} src="./leaf.png" alt="Leaf icon" />
        </div>
    )
}