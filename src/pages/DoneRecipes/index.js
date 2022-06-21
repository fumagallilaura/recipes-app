import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../../components';
import DoneCard from '../../components/DoneCard';
import RecipesContext from '../../context/RecipesContext';
import { DoneRecipesContainer, DoneRecipesTitle } from './style';
import {
  // removeRecipesFromDones,
  // addRecipesToDones,
  // isRecipeDone,
  readDoneRecipesArrs,
} from '../../services/doneRecipes';

// const doneRecipes = [
//   {
//     id: '52771',
//     type: 'food',
//     nationality: 'Italian',
//     category: 'Vegetarian',
//     alcoholicOrNot: '',
//     name: 'Spicy Arrabiata Penne',
//     image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
//     doneDate: '23/06/2020',
//     tags: ['Pasta', 'Curry'],
//   },
//   {
//     id: '178319',
//     type: 'drink',
//     nationality: '',
//     category: 'Cocktail',
//     alcoholicOrNot: 'Alcoholic',
//     name: 'Aquamarine',
//     image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
//     doneDate: '23/06/2020',
//     tags: [],
//   },
// ];

// localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));

function DoneRecipes() {
  const [filterRecipe, setFilteRecipe] = useState('All');
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  const [recipesDone, setRecipesDone] = useState([]);

  useEffect(() => {
    setTitle('Done Recipes');
    setBtnSearchIcon(false);
    setRecipesDone(readDoneRecipesArrs());
  }, [setTitle, setBtnSearchIcon]);

  const verify = () => {
    let filtered = [];
    if (filterRecipe !== 'All') {
      filtered = recipesDone.filter((elem) => elem.type === filterRecipe);
    } else {
      filtered = recipesDone;
    }
    return (
      filtered.map((element, index) => (
        <DoneCard key={ index } index={ index } element={ element } />
      ))
    );
  };

  const handleClick = (type) => {
    setFilteRecipe(type);
  };

  return (
    <DoneRecipesContainer>
      <Header />
      <DoneRecipesTitle>
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
      </DoneRecipesTitle>
    </DoneRecipesContainer>
  );
}

export default DoneRecipes;
