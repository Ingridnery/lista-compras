import styles from './style.module.scss'

export default function SignCard(props){
    return(
        <div className={StyleSheet.container}>
            {props.children}
        </div>
    )
}