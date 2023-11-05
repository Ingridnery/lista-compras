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
import ShareModal from "../../components/modal-share/ShareModal";
import AddItemModal from "../../components/modal-create/AddItemModal";
import { createItem } from "../../services/api";

export default function List() {
    const { userId } = useUserContext();
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showAddItemModal, setShowAddItemModal] = useState(false);
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
            await updateItem(items[itemIndex]);
        } catch (error) {
            toast.error("Erro ao atualizar o item!");
        }
    };

    const handleClearList = async () => {
        try {
            const response = await clearList(userId);
            if (response.status === 200) {
                toast.success("Lista limpa com sucesso!");
                setItems([]);
            } else {
                toast.error("Erro ao limpar a lista!");
            }
        } catch (error) {
            toast.error("Erro ao limpar a lista!");        }
    }
    const handleShareList = async () => {
        try {
            const shareableLink = `${window.location.origin}/list/${userId}`;
            setShareableLink(shareableLink); // Defina o link no estado
            setShowModal(true);
        } catch (error) {
            toast.error("Erro ao compartilhar a lista!");
        }
    }
    const fetchItems = async () => {
        try {   
            console.log("Fetch items");
            const response = await findItensList(userId);
            setItems(response.data.items);
        } catch (error) {
            toast.warn("Lista vazia!");
        }
    }
    // Função para adicionar um item
    const handleAddItem = async (itemDescription) => {
        try {
            const response = await createItem(itemDescription, "comprar", userId);
            if (response.status === 201) {
                toast.success("Item adicionado com sucesso!");
                setShowModal(false);
                fetchItems();
            } else {
                toast.error("Erro ao adicionar o item!");
            }
        } catch (error) {
            console.error("Erro ao adicionar o item", error);
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
                    <div className={styles.menu} onClick={() => setShowModal(true)}>
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
            <AddItemModal isOpen={showModal} onOpen={()=> setShowModal(true)} onClose={()=> setShowModal(false)} onAddItem={handleAddItem} />

        </div>

    );
}
 