import React, { useEffect, useState } from "react";
import { findItensList } from "../../services/api";
import { useUserContext } from '../../UserContext';
import styles from './style.module.scss';
import UserIcon from "../../components/user-icon/UserIcon";
import InviteIcon from "../../components/invite-icon/InviteIcon";
import ToDo from "../../components/to-do/ToDo";
import { updateItem } from "../../services/api";
import { clearList } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import ShareModal from "../../components/modal/ShareModal";

export default function List() {
    const { userId } = useUserContext();
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [shareableLink, setShareableLink] = useState(''); // Novo estado para o link



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
            // ... lógica para atualizar o estado do item
            await updateItem(items[itemIndex]);
        } catch (error) {
            console.error("Erro ao atualizar o item", error);
        }
    };

    const handleClearList = async () => {
        try {
            const response = await clearList(userId);
            if (response.status === 200) {
                console.log("Lista limpa com sucesso");
                setItems([]);
            } else {
                console.log("Erro ao limpar lista");
            }
        } catch (error) {
            console.error("Erro ao atualizar o item", error);
        }
    }
    const handleShareList = async () => {
        try {
            console.log("Compartilhar lista");
            const shareableLink = `${window.location.origin}/list/${userId}`;
            console.log(shareableLink);
            setShareableLink(shareableLink); // Defina o link no estado
            setShowModal(true);
        } catch (error) {
            console.error("Erro ao compartilhar a lista", error);
        }
    }

    return (
        <div className={styles.main}>
            <ToastContainer />
            <div className={styles.content}>
                <div className={styles.userContainer}>
                    <div className={styles.icons}>
                        <UserIcon username="Person" />
                        <UserIcon username="Pessoa" />
                        <UserIcon username="People" />
                    </div>
                    <InviteIcon onClick={()=> handleShareList()} />
                    <ShareModal isOpen={showModal} link={shareableLink} onRequestClose={()=> setShowModal(false)} />

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
                        <div className={styles.button} onClick={()=> handleClearList()}>
                            <img src="./trash-solid.svg" alt="Plus Icon" />
                            <span>Clear Finished</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
