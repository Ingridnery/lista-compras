import styles from "./style.module.scss";

export default function InviteIcon(props){

    return(
        <div className={styles.container}>

            <span className={styles.icon}>
                <img src="./plus.png" alt="Plus Icon" />
            </span>

            <p className={styles.text}>
                Invite Link
            </p>

        </div>
    )
}