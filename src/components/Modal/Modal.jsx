import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ largeImage, closeModal }) => {
  
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [closeModal]);


  const handleClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={css.overlay} onClick={handleClick}>
      <div className={css.modal}>
        <img src={largeImage} alt="Big pic" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};
