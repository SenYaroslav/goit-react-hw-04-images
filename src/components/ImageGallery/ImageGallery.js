import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ pictures }) => {
  return (
    <ul className={css.gallery}>
      {pictures.map(picture => (
        <ImageGalleryItem key={picture.id} picture={picture} />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};
