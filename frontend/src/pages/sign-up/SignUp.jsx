import styles from "./style.module.scss";
import SignCard from '../../components/sign-card/SignCard'
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import React, { useState } from 'react';
import {createUser} from '../../services/api';
import { useUserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

export default function SignUp(props){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUserId } = useUserContext(); // Use o hook para obter setUserId
    const navigate = useNavigate();

    const redirectLogin  = () => {  
        let path = "/signin"; 
        navigate(path);
    }

    const handleCreateUser = async (e) => {
        try{
            const response = await createUser(name, email, password);
            if(response.user){
                setUserId(response.data.user.id);
                navigate("/list");
            }
            else{
                toast.error("Erro ao realizar cadastro! \n Verifique os dados e tente novamente");
            }
        }
        catch(err){
            toast.error("Erro ao realizar cadastro!");
            console.log(err);
        }
    }
    return(
        <div className={styles.main}>
        <ToastContainer/>

            <div className={styles.subDiv}>
                <div className={styles.content}>
                    <SignCard>
                        <Header/>
                        <div className={styles.inputContainer}>
                            <form>
                                <Input className={styles.input} type="text" name="name"  value={name}  onChange={(e) => setName(e.target.value)} logo="./user.png">Username</Input>
                                <Input className={styles.input} type="text" name="email" value={email}  onChange={(e) => setEmail(e.target.value)} logo="./email.png">Email</Input>
                                <Input className={styles.input} type="password" name="password" value={password}  onChange={(e) => setPassword(e.target.value)} logo="./padlock.png">Password</Input>
                            </form>

                            <p className={styles.description}>or <b className={styles.highlight}
                            onClick={redirectLogin}>login to your account</b></p>
                        </div>
                        
                        <div className={styles.buttonContainer}>
                            <Button onClick={() => handleCreateUser()}>Register</Button>
                            <Button>Reset</Button>
                        </div>

                    </SignCard>
                </div>
                
            </div>
            

        </div>

    )
}
