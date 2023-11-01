import styles from "./style.module.scss";

export default function UserIcon(props){

    const listIcons = ["\uD83D\uDC0C", "\uD83E\uDD8A", "\uD83D\uDC31", "\uD83D\uDC3C", "\uD83E\uDD93", "\uD83E\uDD84", "\uD83D\uDC2D", "\uD83D\uDC14", "\uD83D\uDC17", "\uD83D\uDC2E", "\uD83D\uDC39"];
    
    function randomIcon(){
        let icon = listIcons[Math.floor(Math.random() * listIcons.length)]
        return icon
    }

    return(
        <div className={styles.container}>

            <span className={styles.icon}>
                {randomIcon()}
            </span>

            <p className={styles.username}>
                {props.username}
            </p>

        </div>
    )
}