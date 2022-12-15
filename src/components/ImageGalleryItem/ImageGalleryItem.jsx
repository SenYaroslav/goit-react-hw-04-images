import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

const ImageGalleryItem = ({ picture }) => {
  const [largeImageURL, setLargeImageURL] = useState(null);

  const onImageClick = e => {
    setLargeImageURL(e.currentTarget.dataset.action);
  };

  const closeModal = () => {
    setLargeImageURL(null);
  };

  return (
    <li className={css.gallery__item}>
      <img
        className={css.gallery__item_image}
        src={picture.webformatURL}
        alt={`Pic of ${picture.tags}`}
        data-action={picture.largeImageURL}
        onClick={onImageClick}
      />
      {largeImageURL && (
        <Modal largeImage={largeImageURL} closeModal={closeModal} />
      )}
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  picture: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
