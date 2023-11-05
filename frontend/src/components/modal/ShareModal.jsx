import React, { useRef } from 'react';
import Modal from 'react-modal';
import styles from './style.module.scss'; // Importe os estilos

const ShareModal = ({ isOpen, link, onRequestClose }) => {
  const linkRef = useRef(null);

  const copyToClipboard = () => {
    if (linkRef.current) {
      linkRef.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal} // Aplique a classe CSS do estilo do modal
    >
      <h2 className={styles.title}>Compartilhar Lista</h2>
      <input className={styles.input} ref={linkRef} value={link} readOnly />
      <button className={styles.button} onClick={copyToClipboard}>
        Copiar Link
      </button>
    </Modal>
  );
};

export default ShareModal;
