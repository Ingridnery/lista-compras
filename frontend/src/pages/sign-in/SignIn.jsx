import SignCard from '../../components/sign-card/SignCard'
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import styles from './style.module.scss';
import {login} from '../../services/api';
import { useUserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn(props){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUserId } = useUserContext(); // Use o hook para obter setUserId
    //const { userId } = useUserContext(); // Usando o hook para obter o ID do usuário


    const handleLogin = async (e) => { 
        try{
            const response = await login(email, password);
            if(response.status === 200){
                //utilizando o hook para setar o ID do usuário
                setUserId(response.data.user.id);
                navigate("/list");

            }else{
                toast.error("Erro ao realizar login! \n Verifique os dados e tente novamente");
            }
        }
        catch(err){
            toast.error("Erro ao realizar login!");

            console.error("Erro ao realizar login", err);
        }
    }
   
    return(
        <div className={styles.main}>
        <ToastContainer/>

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