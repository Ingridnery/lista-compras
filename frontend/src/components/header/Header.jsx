import React from 'react';
import styles from './style.module.scss'
import { useNavigate } from "react-router-dom";

export default function Header(){

    let navigate = useNavigate(); 
    const redirectHome  = () => {  
        let path = "/"; 
        navigate(path);
    }

    return(
        <div className={styles.container} onClick={redirectHome}>
            <h1 className={styles.title}>Green Shopping</h1>
            <img className={styles.logo} src="./leaf.png" alt="Leaf icon" />
        </div>
    )
}