import React from 'react';
import styles from './Modal.module.css';
import ReactDom from 'react-dom';

const Backdrop = ({ hideCartHandler }) => {
  return <div className={styles.backdrop} onClick={hideCartHandler} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children, hideCartHandler }) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop hideCartHandler={hideCartHandler} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
