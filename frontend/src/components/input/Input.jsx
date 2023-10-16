import styles from './style.module.scss'

export default function Input(props){
    return(
        <label className={styles.label}> {props.labelText}
            <input type={props.inputType} name={props.name} className={styles.input}/>
        </label>
    )
}