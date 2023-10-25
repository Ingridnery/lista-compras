import { useNavigate } from 'react-router-dom'
import styles from './style.module.scss'

export default function Button(props){

    let navigate = useNavigate();
    function handleClick(){
        navigate(props.path)
    }

    return(
        <button className={styles.button}
        onClick={handleClick}
        >
            {props.children}
        </button>
    )
}