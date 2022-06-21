import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DrinkCardContainer, CardImage, CardTitle, CardButton } from './style';

function DrinkCard({ drinks, testID }) {
  const { strDrink, strDrinkThumb, idDrink } = drinks;

  return (
    <DrinkCardContainer>
      <Link
        to={ `/drinks/${idDrink}` }
        style={ { textDecoration: 'none' } }
        data-testid={ `${testID}-recipe-card` }
      >
        <CardImage
          data-testid={ (
            typeof testID === 'number' ? (
              `${testID}-card-img`
            ) : (
              testID
            )
          ) }
          src={ strDrinkThumb }
          alt={ strDrink }
        />
        <CardButton type="button">
          <CardTitle data-testid={ `${testID}-card-name` }>
            { strDrink }
          </CardTitle>
        </CardButton>
      </Link>
    </DrinkCardContainer>

  );
}

DrinkCard.propTypes = {
  testID: PropTypes.number.isRequired,
  drinks: PropTypes.shape({
    idDrink: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default DrinkCard;
