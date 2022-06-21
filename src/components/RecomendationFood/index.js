import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FoodCardContainer, CardImage, CardButton, CardTitle } from './style';

function RecommendationFood({ food, index }) {
  const { strMeal, strMealThumb, idMeal } = food;

  return (
    <FoodCardContainer
      data-testid={ `${index}-recomendation-card` }
    >
      <Link to={ `/foods/${idMeal}` } style={ { textDecoration: 'none' } }>
        <CardButton type="button">
          <CardImage
            data-testid={ `${index}-card-img` }
            src={ strMealThumb }
            alt={ strMeal }
          />
          <CardTitle
            data-testid={ `${index}-recomendation-title` }
          >
            {strMeal}
          </CardTitle>
        </CardButton>
      </Link>
    </FoodCardContainer>

  );
}

RecommendationFood.propTypes = {
  // testID: PropTypes.string.isRequired,
  food: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecommendationFood;
