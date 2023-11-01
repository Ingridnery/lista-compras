import styles from "./style.module.scss";
import UserIcon from "../../components/user-icon/UserIcon";
import InviteIcon from "../../components/invite-icon/InviteIcon";
import ToDo from "../../components/to-do/ToDo";

export default function List(){

    return(
        <div className={styles.main}>

            <div className={styles.content}>

                <div className={styles.userContainer}>

                    <div className={styles.icons}>
                        <UserIcon username="Person"/>
                        <UserIcon username="Pessoa"/>
                        <UserIcon username="People"/>
                    </div>
                    
                    <InviteIcon/>
                </div>

                <div className={styles.todocontainer}>

                    <div className="todos">
                        <ToDo text="Adicionar Scroll ou limite de tasks"/>
                        <ToDo text="task"/>
                        <ToDo text="12312312213"/>
                    </div>

                    <div className={styles.menu}>
                        <div className={styles.button}>
                            <img src="./plus-solid.svg" alt="Plus Icon" />
                            <span>Add Task</span>
                        </div>

                        <div className={styles.button}>
                            <img src="./trash-solid.svg" alt="Plus Icon" />
                            <span>Clear Finished</span>
                        </div>
                    </div>
                    
                </div>

            </div>
            
        </div>


    )
}