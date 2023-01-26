import Loader from 'components/Loader';
import PropTypes from 'prop-types';
import { LoadButton, ButtonWrapper } from './Button.styled';

export default function Button({ onClick, isLoading }) {
  return (
    <ButtonWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <LoadButton type="submit" onClick={onClick}>
          Load more
        </LoadButton>
      )}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
