import { useNavigate } from 'react-router-dom'
import styles from './style.module.scss'

export default function Button(props){

    let navigate = useNavigate();
    function handleClick(){
        if (props.onClick) {
            props.onClick(); 
        }
        else if (props.path) {
            navigate(props.path); // Navega para a rota se a prop path estiver definida
        }
    }

    return(
        <button className={styles.button}
        onClick={handleClick}
        >
            {props.children}
        </button>
    )
}