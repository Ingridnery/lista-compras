import styles from "./style.module.scss"

export default function Credits(){
    return(
        <div className={styles.container}>
            <a href="https://github.com/Ingridnery/lista-compras">
                <img src="./octocat-512.png" alt="Octocat icon"/>
            </a>

            <a href="https://github.com/Ingridnery">
                <img src="./ingrid.jpg" alt="Dev icon"/>
            </a>

            <a href="https://github.com/Vitor5bonelli">
                <img src="./vitor.png" alt="Dev icon"/>
            </a>

        </div>
    )
}