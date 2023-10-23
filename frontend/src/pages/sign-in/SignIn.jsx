import SignCard from '../../components/sign-card/SignCard'
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input"
import styles from './style.module.scss'

export default function SignIn(props){
    return(
        <div className={styles.main}>

            <div className={styles.content}>
                <SignCard>

                    <Header/>

                    <div className={styles.inputContainer}>
                        <Input className={styles.input} type="text" name="name" logo="./user.png">Name</Input>
                        <Input className={styles.input} type="email" name="email" logo="./email.png">Email</Input>
                        <Input className={styles.input} type="password" name="password" logo="./padlock.png">Password</Input>

                        <p className={styles.description}>or <b className={styles.highlight}>create an account </b></p>
                    </div>
                    
                    <div className={styles.buttonContainer}>
                        <Button>Submit</Button>
                        <Button>Reset</Button>
                    </div>


                </SignCard>
            </div>

        </div>
    )
}