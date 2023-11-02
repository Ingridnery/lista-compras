import React, { useEffect, useState } from "react";
import { findItensList } from "../../services/api";
import { useUserContext } from '../../UserContext';
import styles from './style.module.scss';
import UserIcon from "../../components/user-icon/UserIcon";
import InviteIcon from "../../components/invite-icon/InviteIcon";
import ToDo from "../../components/to-do/ToDo";
import { updateItem } from "../../services/api";

export default function List() {
    const { userId } = useUserContext();
    const [items, setItems] = useState([]); // Estado para armazenar os itens

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await findItensList(userId); // Supondo que você queira buscar itens do usuário atual (userId)
                setItems(response.data.items);
            } catch (error) {
                console.error("Erro ao buscar itens da lista", error);
            }
        }
        fetchData();
    }, [userId]);

    const handleCheckboxChange = async (itemIndex) => {      
        try {
            if(items[itemIndex].estado === "comprar"){
                items[itemIndex].estado = "comprado";
            }
            else{
                items[itemIndex].estado = "comprar";
            }
            await updateItem(items[itemIndex]);
        } catch (error) {
            console.error("Erro ao atualizar o item", error);
        }
    };
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.userContainer}>
                    <div className={styles.icons}>
                        <UserIcon username="Person" />
                        <UserIcon username="Pessoa" />
                        <UserIcon username="People" />
                    </div>
                    <InviteIcon />
                </div>
                <div className={styles.todocontainer}>
                    <div className="todos">
                        {items.map((item, index) => (
                            <ToDo key={index} text={item.descricao} checked={item.estado === "comprado"}  onChange={() => handleCheckboxChange(index)} />
                        ))}
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
    );
    
}
