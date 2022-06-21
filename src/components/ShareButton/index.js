import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonContainer from './style';
import shareIcon from '../../assets/images/shareIcon.svg';

const copy = require('clipboard-copy');

function ShareButton({ testID, linkCopied }) {
  const [copyLink, setCopyLink] = useState(false);

  const handleClick = () => {
    copy(linkCopied);
    setCopyLink(true);
  };

  return (
    <ButtonContainer
      type="button"
      onClick={ handleClick }
    >
      <img
        data-testid={ testID }
        src={ shareIcon }
        alt="share-button"
      />
      {copyLink && <span>Link copied!</span>}
    </ButtonContainer>
  );
}

ShareButton.propTypes = {
  testID: PropTypes.string.isRequired,
  linkCopied: PropTypes.string.isRequired,
};

export default ShareButton;
