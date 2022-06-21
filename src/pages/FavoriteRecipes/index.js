import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../../components';
import FavoriteCard from '../../components/FavoriteCard';
import RecipesContext from '../../context/RecipesContext';
import { FavoriteRecipesContainer, FavoriteRecipesTitle } from './style';
import {
  // removeRecipesFromDones,
  // addRecipesToDones,
  // isRecipeDone,
  readFavoriteRecipesArrs,
} from '../../services/favoriteRecipes';

function FavoriteRecipes() {
  const [filterRecipe, setFilteRecipe] = useState('All');
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  const [recipesDone, setRecipesDone] = useState([]);

  useEffect(() => {
    setTitle('Favorite Recipes');
    setBtnSearchIcon(false);
    setRecipesDone(readFavoriteRecipesArrs());
  }, [setTitle, setBtnSearchIcon]);

  const resetFavorites = () => {
    setRecipesDone(readFavoriteRecipesArrs());
  };

  const verify = () => {
    let filtered = [];
    if (filterRecipe !== 'All') {
      filtered = recipesDone.filter((elem) => elem.type === filterRecipe);
    } else {
      filtered = recipesDone;
    }
    return (
      filtered.map((element, index) => (
        <FavoriteCard
          key={ index }
          index={ index }
          element={ element }
          click={ resetFavorites }
        />
      ))
    );
  };

  const handleClick = (type) => {
    setFilteRecipe(type);
  };

  return (
    <FavoriteRecipesContainer>
      <Header />
      <FavoriteRecipesTitle>
        <div className="done-recipes-body">
          <div>
            <button
              type="button"
              data-testid="filter-by-all-btn"
              onClick={ () => handleClick('All') }
            >
              All
            </button>
            <button
              type="button"
              data-testid="filter-by-food-btn"
              onClick={ () => handleClick('food') }

            >
              Foods
            </button>
            <button
              type="button"
              data-testid="filter-by-drink-btn"
              onClick={ () => handleClick('drink') }
            >
              Drinks
            </button>
          </div>
          { verify() }
        </div>
      </FavoriteRecipesTitle>
    </FavoriteRecipesContainer>
  );
}

export default FavoriteRecipes;
