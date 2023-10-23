import SignCard from '../../components/sign-card/SignCard'
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input"
import styles from './style.module.scss'

export default function SignIn(props){
    return(
        <div className={styles.container}>

            <SignCard>

                <Header/>

                <Input type="text" name="name">Name</Input>

                <Button>Submit</Button>

            </SignCard>
            
            
        </div>
    )
}