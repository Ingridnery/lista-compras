import styles from "./style.module.scss";
import SignCard from '../../components/sign-card/SignCard'
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import React, { useState } from 'react';
import {createUser} from '../../services/api';

export default function SignUp(props){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateUser = async (e) => {
        try{
            const response = await createUser(name, email, password);
            if(response.user){
                console.log("User created");
                window.location.href = "/signin"; //redirecionar pra pagina de tarefas
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
                            <Input className={styles.input} type="text" name="name"  value={name}  onChange={(e) => setName(e.target.value)} logo="./user.png">Username</Input>
                            <Input className={styles.input} type="text" name="email" value={email}  onChange={(e) => setEmail(e.target.value)} logo="./email.png">Email</Input>
                            <Input className={styles.input} type="password" name="password" value={password}  onChange={(e) => setPassword(e.target.value)} logo="./padlock.png">Password</Input>
                        </form>

                        <p className={styles.description}>or <b className={styles.highlight}>login to your account</b></p>
                    </div>
                    
                    <div className={styles.buttonContainer}>
                        <Button onClick={() => handleCreateUser()}>Register</Button>
                        <Button>Reset</Button>
                    </div>

                </SignCard>
            </div>

        </div>

    )
}
