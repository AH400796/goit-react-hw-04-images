import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Image } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  handleOnClickImage,
}) {
  return (
    <ListItem onClick={() => handleOnClickImage(largeImageURL)}>
      <Image src={webformatURL} alt="" />
    </ListItem>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  handleOnClickImage: PropTypes.func.isRequired,
};
