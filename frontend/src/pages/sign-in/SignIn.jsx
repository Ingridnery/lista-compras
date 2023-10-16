import SignCard from '../../components/sign-card/SignCard'
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import styles from './style.module.scss'

export default function Input(props){
    return(
        <div className="container">
            <SignCard/>

            <Button></Button>
        </div>
    )
}