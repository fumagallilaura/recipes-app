import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import RecipesContext from '../../context/RecipesContext';
import { getDrinkById } from '../../services';
import SharingButtons from '../../components/SharingButtons';
import {
  DrinksDetailsContainer,
  DrinksDetailsImage,
  DrinksDetailsTitle,
  DrinksDetailsCategory,
  DrinksList,
  DrinksListItem,
  DrinksInstructions,
  StartRecipeButton,
  BottomButtonsContainer,
} from './style';
import {
  removeIngredient,
  addIngredient,
  addRecipesToInProgress,
  isRecipeInProgress,
} from '../../services/inProgressRecipes';
import {
  recipeIsDone,
  addRecipesToDones,
} from '../../services/doneRecipes';

function lintEuTeAMO(checked, ingredient, id) {
  if (checked) {
    addIngredient('cocktails', id, ingredient);
  } else {
    removeIngredient('cocktails', id, ingredient);
  }
}

function DrinksDetails() {
  const history = useHistory();
  const { id } = useParams();
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  const [drinkApi, setDrinkApi] = useState(false);
  const [len, setLen] = useState(0);

  useEffect(() => {
    if (!isRecipeInProgress('cocktails', id)) {
      addRecipesToInProgress('cocktails', id, []);
    }
    setLen(JSON.parse(localStorage.getItem('inProgressRecipes'))
      .cocktails[id].length);
  }, [id]);

  useEffect(() => {
    setTitle('Drinks Details');
    setBtnSearchIcon(false);

    const handleApi = async () => {
      const api = await getDrinkById(id);
      setDrinkApi(api.drinks);
    };
    handleApi();
  }, [setTitle, setBtnSearchIcon, setDrinkApi, id]);

  const handleIngredient = () => (
    drinkApi && Object.entries(drinkApi[0]).filter((arrayEntrie) => (
      arrayEntrie[0].includes('strIngredient') && arrayEntrie[1] !== null
    )).filter((e) => e[1] !== '')
  );

  const handlestrMeasure = () => (
    drinkApi && Object.entries(drinkApi[0]).filter((arrayEntrie) => (
      arrayEntrie[0].includes('strMeasure') && arrayEntrie[1] !== ''
    ))
  );

  const handleChange = (checked, ingredient) => {
    lintEuTeAMO(checked, ingredient, id);
    setLen(JSON.parse(localStorage.getItem('inProgressRecipes'))
      .cocktails[id].length);
  };

  const getIngr = () => (handleIngredient().map((r) => r[1]));

  const handleFinished = () => {
    const Obj = {
      id: drinkApi[0].idDrink,
      type: 'drink',
      nationality: '',
      category: '',
      alcoholicOrNot: drinkApi[0].strAlcoholic,
      name: drinkApi[0].strDrink,
      image: drinkApi[0].strDrinkThumb,
      doneDate: drinkApi[0].dateModified,
      tags: '',
    };
    Obj.tags = drinkApi[0].strTags;
    if (recipeIsDone(Obj)) {
      history.push('/done-recipes');
    } else {
      addRecipesToDones(Obj);
      history.push('/done-recipes');
    }
  };

  return drinkApi && (
    <DrinksDetailsContainer>
      <DrinksDetailsImage
        src={ drinkApi[0].strDrinkThumb }
        data-testid="recipe-photo"
        alt={ drinkApi[0].strDrink }
      />
      <DrinksDetailsTitle
        data-testid="recipe-title"
      >
        { drinkApi[0].strDrink }
      </DrinksDetailsTitle>
      <DrinksDetailsCategory data-testid="recipe-category">
        { drinkApi[0].strAlcoholic }
      </DrinksDetailsCategory>

      <SharingButtons
        currentRecipe={ drinkApi[0] }
        types="drink"
        linkCopied={ `http://localhost:3000/drinks/${id}` }
      />
      <DrinksList>
        {
          handleIngredient().map((drink, index) => (
            <DrinksListItem
              key={ drink[0] }
              data-testid={ `${index}-ingredient-step` }
            >
              <label htmlFor={ drink[1] }>
                <input
                  data-testid="name-filter"
                  type="checkbox"
                  name={ drink[1] }
                  id={ drink[1] }
                  onChange={ (e) => handleChange(e.target.checked, drink[1]) }
                  defaultChecked={ JSON.parse(localStorage.getItem('inProgressRecipes'))
                    .cocktails[id]
                    && JSON.parse(localStorage.getItem('inProgressRecipes'))
                      .cocktails[id].includes(drink[1]) }
                />
                {
                  handlestrMeasure()[index].includes(null) ? (
                    `${drink[1]}`
                  ) : (
                    `${drink[1]} - ${handlestrMeasure()[index][1]}`
                  )
                }
              </label>
            </DrinksListItem>
          ))
        }
      </DrinksList>
      <DrinksInstructions data-testid="instructions">
        { drinkApi[0].strInstructions }
      </DrinksInstructions>
      {
      // solução de quem claramente esta com sono
        getIngr().length === len
          ? (
            <BottomButtonsContainer>
              <StartRecipeButton
                type="button"
                data-testid="finish-recipe-btn"
                onClick={ handleFinished }
              >
                Finish Recipe
              </StartRecipeButton>
            </BottomButtonsContainer>
          ) : (
            <BottomButtonsContainer>
              <StartRecipeButton
                type="button"
                data-testid="finish-recipe-btn"
                onClick={ handleFinished }
                disabled
              >
                Finish Recipe
              </StartRecipeButton>
            </BottomButtonsContainer>
          )
      }
    </DrinksDetailsContainer>
  );
}

export default DrinksDetails;
