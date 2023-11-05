// ListShared.js
import React from 'react';
import styles from './style.module.scss';
import ToDo from "../../components/to-do/ToDo";
import { updateItem } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { useState } from 'react';
import { useEffect } from 'react';
import { findItensList } from "../../services/api";
import { useParams } from 'react-router-dom';


const ListShared = ({id}) => {
    const {userId} = useParams();
    const [items, setItems] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await findItensList(userId);
                setItems(response.data.items);
            } catch (error) {
                toast.warn("Lista vazia!");
            }
        }
        fetchData();
    }, [userId]);

    const handleCheckboxChange = async (itemIndex) => {      
        try {
            await updateItem(items[itemIndex]);
        } catch (error) {
            console.error("Erro ao atualizar o item", error);
        }
    };
    
    return (
        <div className={styles.main}>
            <ToastContainer />
            <div className={styles.content}>
                
                <div className={styles.todocontainer}>
                    <div className="todos">
                        {items.map((item, index) => (
                            <ToDo key={index} text={item.descricao} checked={item.estado === "comprado"} onChange={() => handleCheckboxChange(index)} />
                        ))}
                    </div>                       
                </div>
            </div>
        </div>
    );
};

export default ListShared;
