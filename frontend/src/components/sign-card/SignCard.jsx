import styles from './style.module.scss'

export default function SignCard(props){
    return(
        <div className={styles.container}>
            {props.children}
        </div>
    )
}