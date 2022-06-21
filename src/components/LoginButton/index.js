import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonContainer from './style';

function LoginButton({ children }) {
  const { test, name, disabled, handleClick, page, loading } = children;

  return (
    <>
      <ButtonContainer
        data-testid={ test }
        type="button"
        disabled={ disabled }
        onClick={ handleClick }
      >
        { name }
      </ButtonContainer>
      {
        loading && <Redirect to={ page } />
      }
    </>

  );
}

LoginButton.propTypes = {
  children: PropTypes.shape({
    test: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    page: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

export default LoginButton;
