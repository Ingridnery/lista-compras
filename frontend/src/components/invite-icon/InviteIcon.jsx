import styles from "./style.module.scss";

export default function InviteIcon(props){
    function handleClick(){
        if (props.onClick) {
            props.onClick(); 
        }
    }


    return(
        <div className={styles.container} onClick={handleClick}>

            <span className={styles.icon} >
                <img src="./plus.png" alt="Plus Icon" />
            </span>

            <p className={styles.text}>
                Invite Link
            </p>

        </div>
    )
}