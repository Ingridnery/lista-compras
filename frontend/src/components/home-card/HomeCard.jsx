import Header from "../header/Header";
import styles from "./style.module.scss"

export default function HomeCard(){
    return(
        <div className={styles.home}>
            <Header/>

            <p className={styles.text}>
                Mussum Ipsum, cacilds vidis litro abertis. 
                Quem num gosta di mim que vai caçá sua turmis! 
                Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. 
                Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
                Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. 
                Sed non consequat odio.
            </p>

            <button className={styles.button}>Login</button>
        </div>
    )
}