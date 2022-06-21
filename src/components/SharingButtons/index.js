import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ButtonContainer from './style';
import blackHeartIcon from '../../assets/images/blackHeartIcon.svg';
import whiteHeartIcon from '../../assets/images/whiteHeartIcon.svg';
import shareIcon from '../../assets/images/shareIcon.svg';
import {
  isRecipeFavorite,
  removeRecipesFromFavorites,
  addRecipesToFavorites,
} from '../../services/favoriteRecipes';
// https://stackoverflow.com/questions/69572613/how-to-wrap-the-initialisation-of-an-array-in-its-own-usememo-hook

const copy = require('clipboard-copy');

function SharingButtons({ currentRecipe, types, linkCopied }) {
  const [HeartIcon, setHeartIcon] = useState(false);
  const [recipeData, setRecipeData] = useState({});
  const [isloading, setIsloading] = useState(true);
  const [copyLink, setCopyLink] = useState(false);

  useEffect(() => {
    if (types === 'food') {
      const { idMeal, strArea, strCategory, strMeal, strMealThumb } = currentRecipe;
      setRecipeData({
        id: idMeal,
        type: types,
        nationality: strArea,
        category: strCategory,
        alcoholicOrNot: '',
        name: strMeal,
        image: strMealThumb,
      });
    } else {
      const { idDrink, strArea, strCategory, strDrink,
        strDrinkThumb, strAlcoholic } = currentRecipe;
      setRecipeData({
        id: idDrink,
        type: types,
        nationality: '',
        category: strCategory,
        alcoholicOrNot: strAlcoholic,
        name: strDrink,
        image: strDrinkThumb,
      });
      recipeData.nationality = strArea;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRecipe, types]);

  useEffect(() => {
    setIsloading(false);
  }, [HeartIcon]);

  useEffect(() => {
    setHeartIcon(isRecipeFavorite(recipeData));
  }, [recipeData]);

  const addFavorite = (value) => {
    if (!value) {
      addRecipesToFavorites(recipeData);
      setHeartIcon(true);
    } else {
      removeRecipesFromFavorites(recipeData);
      setHeartIcon(false);
    }
  };

  const handleClick = () => {
    copy(linkCopied);
    // global.alert('Link copied!');
    setCopyLink(true);
  };

  return (
    !isloading
    && (
      <div>
        <ButtonContainer
          type="button"
          onClick={ handleClick }
          data-testid="share-btn"
        >
          <img
            src={ shareIcon }
            alt="share-button"
          />
          {copyLink && <span>Link copied!</span>}
        </ButtonContainer>
        <ButtonContainer
          onClick={ () => addFavorite(HeartIcon) }
        >
          <img
            data-testid="favorite-btn"
            src={ HeartIcon
              ? blackHeartIcon : whiteHeartIcon }
            alt="favorite-btn"
          />
        </ButtonContainer>
      </div>
    )
  );
}

SharingButtons.propTypes = {
  currentRecipe: PropTypes.shape({
    idDrink: PropTypes.string,
    idMeal: PropTypes.string,
    strArea: PropTypes.string,
    strCategory: PropTypes.string.isRequired,
    strMeal: PropTypes.string,
    strDrink: PropTypes.string,
    strMealThumb: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strAlcoholic: PropTypes.string,
  }).isRequired,
  types: PropTypes.string.isRequired,
  linkCopied: PropTypes.string.isRequired,
};

export default SharingButtons;
