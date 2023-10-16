import CircleLink from "../circle-link/CircleLink"
import styles from "./style.module.scss"

export default function Credits(){
    return(
        <div className={styles.container}>

            <CircleLink 
            className={styles.item}
            link="https://github.com/Ingridnery/lista-compras" 
            image="./github.png" alt="Octocat icon"
            text="Repository"/>
            
            <CircleLink 
            className={styles.item}
            link="https://github.com/Ingridnery" 
            image="./ingrid.jpg" alt="Dev icon"
            text="Ingrid Nery"/>
            
            <CircleLink 
            className={styles.item}
            link="https://github.com/Vitor5bonelli" 
            image="./vitor.png" alt="Dev icon"
            text="Vitor Bonelli"/>

        </div>
    )
}