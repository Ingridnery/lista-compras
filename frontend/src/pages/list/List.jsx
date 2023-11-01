import styles from "./style.module.scss";
import UserIcon from "../../components/user-icon/UserIcon";
import InviteIcon from "../../components/invite-icon/InviteIcon";

export default function List(){

    return(
        <div className={styles.main}>

            <div className={styles.content}>

                <div className={styles.userContainer}>

                    <div className={styles.icons}>
                        <UserIcon username="Adilson"/>
                        <UserIcon username="Guilherme"/>
                        <UserIcon username="Elisa"/>
                    </div>
                    
                    <InviteIcon/>
                </div>

                <div className={styles.todocontainer}>

                </div>

            </div>
            

        </div>


    )
}