import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Skeleton from 'components/Skeleton';
import { List } from './ImageGallery.styled';

let skeletons = [];
for (let i = 0; i < 12; i += 1) {
  skeletons.push(i);
}

export default function ImageGallery({
  images,
  handleOnClickImage,
  isLoading,
}) {
  return (
    <>
      {isLoading && (
        <List>
          {skeletons.map((el, idx) => {
            return <Skeleton key={idx} />;
          })}
        </List>
      )}
      {!isLoading && (
        <List>
          {images?.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                handleOnClickImage={handleOnClickImage}
              />
            );
          })}
        </List>
      )}
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleOnClickImage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
