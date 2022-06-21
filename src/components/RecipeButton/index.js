import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import StartRecipeButton from './style';
import {
  addRecipesToInProgress,
  isRecipeInProgress,
} from '../../services/inProgressRecipes';

function RecipeButton({ typeArr, type, id }) {
  const history = useHistory();
  const [doneRecipe, setDoneRecipe] = useState(false);
  const [link, setLink] = useState(type);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(false);
  }, [doneRecipe]);

  useEffect(() => {
    if (type === 'meals') {
      setLink('foods');
    } else {
      setLink('drinks');
    }
    if (isRecipeInProgress(type, id)) {
      setDoneRecipe(true);
    } else {
      setDoneRecipe(false);
    }
  }, [type, id]);

  const addDoneRecipe = (val) => {
    if (!val) {
      addRecipesToInProgress(type, id, typeArr);
      history.push(`/${link}/${id}/in-progress`);
    } else {
      history.push(`/${link}/${id}/in-progress`);
    }
  };

  return (
    !isloading && (
      <StartRecipeButton
        data-testid="start-recipe-btn"
        onClick={ () => { addDoneRecipe(doneRecipe); } }
      >
        { doneRecipe ? 'Continue Recipe' : 'Start Recipe' }
      </StartRecipeButton>
    )
  );
}

RecipeButton.propTypes = {
  typeArr: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RecipeButton;
