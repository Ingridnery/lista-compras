import CircleLink from "../circle-link/CircleLink"
import styles from "./style.module.scss"

export default function Credits(){
    return(
        <div className={styles.container}>

            <CircleLink 
            link="https://github.com/Ingridnery/lista-compras" 
            image="./octocat-512.png" alt="Octocat icon"/>
            
            <CircleLink 
            link="https://github.com/Ingridnery" 
            image="./ingrid.jpg" alt="Dev icon"/>
            
            <CircleLink 
            link="https://github.com/Vitor5bonelli" 
            image="./vitor.png" alt="Dev icon"/>

        </div>
    )
}