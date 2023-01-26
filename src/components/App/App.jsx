import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import smoothImagesScroll from '../../services/utility';
import { toastNotifyInfo, toastNotifyError } from '../../services/toast-notify';

import { fetchImges } from '../../services/axios-api';
import ImageGallery from 'components/ImageGallery';
import Searchbar from 'components/Searchbar';
import Modal from 'components/Modal';
import Button from 'components/Button';

import { Wrapper, Image } from './App.styled';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [modalUrl, setModalUrl] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    if (lastPage === 0) {
      toastNotifyInfo('No data found on your request');
    }
  }, [lastPage]);

  useEffect(() => {
    smoothImagesScroll();
  }, [images]);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    toggleIsLoading();
    fetchImges(page, searchQuery)
      .then(response => {
        setImages(prevState => [...prevState, ...response.data.hits]);
        setLastPage(Math.ceil(response.data.totalHits / 12));
      })
      .catch(function (error) {
        if (error.response) {
          toastNotifyError(error.response.data);
        } else if (error.request) {
          toastNotifyError('XMLHttpRequest failed');
        } else {
          toastNotifyError('Error', error.message);
        }
      })
      .finally(toggleIsLoading);
  }, [page, searchQuery]);

  const handleSearchSubmit = searchQuery => {
    setPage(1);
    setLastPage(1);
    setImages([]);
    setSearchQuery(searchQuery);
  };

  const handleClickOnLoadMoreButton = event => {
    event.preventDefault();
    setPage(prevState => prevState + 1);
  };

  const toggleIsLoading = () => {
    setIsLoading(prevState => !prevState);
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const openModal = url => {
    setModalUrl(url);
    toggleModal();
  };

  return (
    <Wrapper>
      <Toaster />
      {showModal && (
        <Modal onClose={toggleModal}>
          <Image src={modalUrl} alt="" />
        </Modal>
      )}
      <Searchbar onSubmitForm={handleSearchSubmit} />
      <ImageGallery
        images={images}
        handleOnClickImage={openModal}
        isLoading={isLoading}
      />
      {images.length !== 0 && page !== lastPage && (
        <Button onClick={handleClickOnLoadMoreButton} isLoading={isLoading} />
      )}
    </Wrapper>
  );
}
