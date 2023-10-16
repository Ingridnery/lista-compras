import styles from "./style.module.scss"
import Credits from "../../components/credits/Credits"
import HomeCard from "../../components/home-card/HomeCard"
export default function Home(){
    return(
        <div className={styles.main}>
            <div className={styles.content}>
                <HomeCard/>
                <Credits/>
            </div>
        </div>
    )
}