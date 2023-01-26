import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Header, Form, Input, Button } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { toastNotifyInfo } from '../../services/toast-notify';
import { useState } from 'react';

const searchformRoot = document.querySelector('#searchform-root');

export default function Searchbar({ onSubmitForm }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmitForm = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      toastNotifyInfo('Please, specify your search criteria');
      return;
    }
    onSubmitForm(searchQuery);
    setSearchQuery('');
    event.currentTarget.reset();
  };

  const handleInputChange = event => setSearchQuery(event.target.value);

  return createPortal(
    <Header>
      <Form onSubmit={handleSubmitForm}>
        <Button type="submit">
          <AiOutlineSearch size={20} color={'currentColor'} />
        </Button>
        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
      </Form>
    </Header>,
    searchformRoot
  );
}

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
