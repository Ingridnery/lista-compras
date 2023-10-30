import SignCard from '../../components/sign-card/SignCard'
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import styles from './style.module.scss';
import {login} from '../../services/api';
import React, { useState } from 'react';

export default function SignIn(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => { 
        try{
            const response = await login(email, password);
            if(response.status === 200){
                window.location.href = "/home";
            }

        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <div className={styles.main}>

            <div className={styles.content}>
                <SignCard>

                    <Header/>

                    <div className={styles.inputContainer}>
                        <form>
                            <Input className={styles.input} type="text" name="email" value={email} logo="./email.png" onChange={(e) => setEmail(e.target.value)}>Email</Input>
                            <Input className={styles.input} onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password} logo="./padlock.png">Password</Input>
                        </form>

                        <p className={styles.description}>or <b className={styles.highlight}>create an account </b></p>
                    </div>
                    
                    <div className={styles.buttonContainer}>
                        <Button onClick={() => handleLogin()}>Login</Button>
                        <Button onClick={() => console.log("Button clicked")}>Reset</Button>
                    </div>


                </SignCard>
            </div>

        </div>
    )
}