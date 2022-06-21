import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  DoneCardContainer,
  CardImage,
  CardButton,
  CardTitle,
  ImageContainer,
  CardContainer,
  TextContainer,
} from './style';
import { ShareButton } from '..';
import FavoriteButton from '../FavoriteButton';

function FavoriteCard({ element, index, click }) {
  const [link, setLink] = useState('foods');
  const { id, type, category, nationality,
    alcoholicOrNot, name, image } = element;
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(false);
  }, [link]);

  useEffect(() => {
    if (type === 'food') {
      setLink('foods');
    } else {
      setLink('drinks');
    }
  }, [type]);

  return (
    !isloading && (
      <DoneCardContainer>
        <ImageContainer>
          <Link to={ `/${link}/${id}` } style={ { textDecoration: 'none' } }>
            <CardButton type="button">
              <CardImage
                data-testid={ `${index}-horizontal-image` }
                src={ image }
                alt={ image }
              />
            </CardButton>
          </Link>
        </ImageContainer>
        <CardContainer>
          {
            link === 'foods'
              ? (
                <TextContainer data-testid={ `${index}-horizontal-top-text` }>
                  {`${nationality} - ${category}`}
                </TextContainer>)
              : (
                <TextContainer data-testid={ `${index}-horizontal-top-text` }>
                  {alcoholicOrNot}
                </TextContainer>)
          }
          <Link to={ `/${link}/${id}` } style={ { textDecoration: 'none' } }>
            <CardButton type="button">
              <CardTitle data-testid={ `${index}-horizontal-name` }>
                {name}
              </CardTitle>
            </CardButton>
          </Link>
          <ShareButton
            testID={ `${index}-horizontal-share-btn` }
            linkCopied={ `http://localhost:3000/${link}/${id}` }
          />
          <FavoriteButton
            currentRecipe={ element }
            type="food"
            testID={ `${index}-horizontal-favorite-btn` }
            click={ click }
          />
        </CardContainer>
      </DoneCardContainer>
    )
  );
}

FavoriteCard.propTypes = {
  index: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteCard;
