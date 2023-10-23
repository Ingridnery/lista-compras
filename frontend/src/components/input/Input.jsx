import styles from "./style.module.scss"

export default function Input(props){
    return(
        <input className="input" type={props.type} name={props.name} placeholder={props.children}/>
    )
}