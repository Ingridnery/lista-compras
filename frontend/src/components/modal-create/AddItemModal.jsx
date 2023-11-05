import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './style.module.scss'; // Importe os estilos

const AddItemModal = ({ isOpen, onOpen, onClose, onAddItem }) => {
  const [itemName, setItemName] = useState('');

  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Adicionar Item"
      className={styles.modal}
    >
      <h2 className={styles.title}>Adicionar Item</h2>
      <input
        type="text"
        placeholder="Nome do item"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)} className={styles.input}
      />
      <button className={styles.button} onClick={() => onAddItem(itemName)}>Adicionar</button>
    </Modal>
  );
};

export default AddItemModal;
