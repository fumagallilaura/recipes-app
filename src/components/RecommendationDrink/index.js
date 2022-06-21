import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DrinkCardContainer, CardImage, CardTitle } from './style';

function RecommendationDrink({ drinkRandom, index }) {
  const { strDrink, strDrinkThumb, idDrink } = drinkRandom;
  return (
    <DrinkCardContainer data-testid={ `${index}-recomendation-card` }>
      <Link to={ `/drinks/${idDrink}` }>
        <CardImage
          data-testid={ `${index}-card-img` }
          src={ strDrinkThumb }
          alt={ strDrink }
        />
        <CardTitle data-testid={ `${index}-recomendation-title` }>
          { strDrink }
        </CardTitle>
      </Link>
    </DrinkCardContainer>

  );
}

RecommendationDrink.propTypes = {
  // testID: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  drinkRandom: PropTypes.shape({
    idDrink: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecommendationDrink;
