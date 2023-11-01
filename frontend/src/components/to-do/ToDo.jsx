import styles from "./style.module.scss";

export default function ToDo(props){
    return(
        <div className={styles.container}>

            <label className={styles.input}>
                <input type="checkbox"/> 
                {props.text}
            </label>

        </div>
    )
}