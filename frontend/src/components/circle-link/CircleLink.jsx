import styles from './style.module.scss'

export default function CircleLink(props){
    return(
        <>
        <div className={styles.container}>

            <div className={styles.circleLink}>
                <a href={props.link} className={styles.link}>
                    <img src={props.image} alt={props.alt} className={styles.image}/>
                </a>
            </div>

            <p className={styles.text}>{props.text}</p>
        </div>
        </>
    )
}