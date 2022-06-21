import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ButtonContainer from './style';
import blackHeartIcon from '../../assets/images/blackHeartIcon.svg';
import whiteHeartIcon from '../../assets/images/whiteHeartIcon.svg';
import {
  isRecipeFavorite,
  removeRecipesFromFavorites,
  addRecipesToFavorites,
} from '../../services/favoriteRecipes';
// https://stackoverflow.com/questions/69572613/how-to-wrap-the-initialisation-of-an-array-in-its-own-usememo-hook

function FavoriteButton({ testID, currentRecipe, click }) {
  const [HeartIcon, setHeartIcon] = useState(false);
  const [recipeData, setRecipeData] = useState({});
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setRecipeData(currentRecipe);
  }, [currentRecipe]);

  useEffect(() => {
    setHeartIcon(isRecipeFavorite(recipeData));
  }, [recipeData]);

  useEffect(() => {
    setIsloading(false);
  }, [HeartIcon]);

  const addFavorite = (value) => {
    if (!value) {
      addRecipesToFavorites(recipeData);
      setHeartIcon(true);
    } else {
      removeRecipesFromFavorites(recipeData);
      click();
      setHeartIcon(false);
    }
  };

  return (
    !isloading
    && (
      <ButtonContainer
        onClick={ () => addFavorite(HeartIcon) }
      >
        <img
          data-testid={ testID }
          src={ HeartIcon
            ? blackHeartIcon : whiteHeartIcon }
          alt="favorite-btn"
        />
      </ButtonContainer>
    )
  );
}

FavoriteButton.propTypes = {
  click: PropTypes.func.isRequired,
  currentRecipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  testID: PropTypes.string.isRequired,
};

export default FavoriteButton;
