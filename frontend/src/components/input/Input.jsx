import styles from "./style.module.scss"

export default function Input(props){
    return(
        <div className={styles.container}>
            <img className={styles.icon} src={props.logo} alt="Icon" />
            <input className={styles.input} type={props.type} name={props.name} placeholder={props.children} value={props.value} onChange={props.onChange}/>
        </div>
    )
}