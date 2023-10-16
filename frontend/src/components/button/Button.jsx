import styles from './style.module.scss'

export default function Button(props){
    return(
        <button className={styles.button}>{props.children}</button>
    )
}