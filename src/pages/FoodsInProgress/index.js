import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import RecipesContext from '../../context/RecipesContext';
import { getFoodById } from '../../services';
import SharingButtons from '../../components/SharingButtons';
import {
  FoodDetailsContainer,
  FoodDetailsImage,
  FoodDetailsTitle,
  FoodDetailsCategory,
  FoodRecipeCategory,
  FoodDetailsList,
  FoodDetailsListItem,
  FoodDetailsInstructions,
  BottomButtonsContainer,
  StartRecipeButton,
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
    addIngredient('meals', id, ingredient);
  } else {
    removeIngredient('meals', id, ingredient);
  }
}

function FoodsInProgress() {
  const { id } = useParams();
  const history = useHistory();
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  const [foodApi, setFoodApi] = useState(false);
  const [len, setLen] = useState(0);

  useEffect(() => {
    if (!isRecipeInProgress('meals', id)) {
      addRecipesToInProgress('meals', id, []);
    }
    setLen(JSON.parse(localStorage.getItem('inProgressRecipes'))
      .meals[id].length);
  }, [id]);

  useEffect(() => {
    setTitle('Foods in Progress');
    setBtnSearchIcon(false);
    const handleApi = async () => {
      try {
        const api = await getFoodById(id);
        setFoodApi(api.meals);
      } catch (error) {
        console.log(error);
      }
    };
    handleApi();
  }, [setFoodApi, id, setTitle, setBtnSearchIcon]);

  const handleIngredient = () => (
    foodApi && Object.entries(foodApi[0]).filter((arrayEntrie) => (
      arrayEntrie[0].includes('strIngredient') && arrayEntrie[1] !== ''
    )).filter((e) => e[1] !== null)
  );

  const handlestrMeasure = () => (
    foodApi && Object.entries(foodApi[0]).filter((arrayEntrie) => (
      arrayEntrie[0].includes('strMeasure') && arrayEntrie[1] !== ' '
    ))
  );

  const getIngr = () => (handleIngredient().map((r) => r[1]));

  const handleFinished = () => {
    const Obj = {
      id: foodApi[0].idMeal,
      type: 'food',
      nationality: foodApi[0].strArea,
      category: foodApi[0].strCategory,
      alcoholicOrNot: '',
      name: foodApi[0].strMeal,
      image: foodApi[0].strMealThumb,
      doneDate: '',
      tags: '',
    };
    if (recipeIsDone(Obj)) {
      history.push('/done-recipes');
    } else {
      addRecipesToDones(Obj);
      history.push('/done-recipes');
    }
  };

  const handleChange = (checked, ingredient) => {
    lintEuTeAMO(checked, ingredient, id);
    setLen(JSON.parse(localStorage.getItem('inProgressRecipes'))
      .meals[id].length);
  };

  return (
    foodApi && (
      <FoodDetailsContainer>
        <FoodDetailsImage
          src={ foodApi[0].strMealThumb }
          data-testid="recipe-photo"
          alt={ foodApi[0].strMeal }
        />
        <FoodDetailsTitle
          data-testid="recipe-title"
        >
          { foodApi[0].strMeal }
        </FoodDetailsTitle>
        <FoodDetailsCategory
          data-testid="recipe-category"
        >
          { foodApi[0].strCategory }
        </FoodDetailsCategory>
        <SharingButtons
          currentRecipe={ foodApi[0] }
          types="food"
          linkCopied={ `http://localhost:3000/foods/${id}` }
        />
        <FoodRecipeCategory data-testid="recipe-category">
          { foodApi.strCategory }
        </FoodRecipeCategory>
        <FoodDetailsList>
          {
            handleIngredient().map((meal, index) => (
              <FoodDetailsListItem
                key={ meal[1] }
                data-testid={ `${index}-ingredient-step` }
              >
                <label htmlFor={ meal[1] }>
                  <input
                    data-testid="name-filter"
                    type="checkbox"
                    name={ meal[1] }
                    id={ meal[1] }
                    // style={ { } }
                    onChange={ (e) => handleChange(e.target.checked, meal[1]) }
                    // ok, desisto! #partiuMonitoria
                    // onChange={ (e) => {
                    //   console.log(e.target.style);
                    //   if (e.target.checked) {
                    //     e.style = 'text-decoration: none solid rgb(0, 0, 0)';
                    //     console.log('toaki');
                    //   }
                    //   console.log(e.target);
                    //   handleChange(e.target.checked, meal[1]);
                    // } }
                    defaultChecked={ JSON.parse(localStorage.getItem('inProgressRecipes'))
                      .meals[id]
                      && JSON.parse(localStorage.getItem('inProgressRecipes'))
                        .meals[id].includes(meal[1]) }
                  />
                  { `${meal[1]} - ${handlestrMeasure()[index][1]}` }
                </label>
              </FoodDetailsListItem>
            ))
          }
        </FoodDetailsList>
        <FoodDetailsInstructions data-testid="instructions">
          { foodApi[0].strInstructions }
        </FoodDetailsInstructions>
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
        {/* <BottomButtonsContainer>
          <StartRecipeButton
            type="button"
            data-testid="finish-recipe-btn"
            onClick={ handleFinished }
            disabled={ () => {
              if (getIngr().length === len) {
                return false;
              }
              return true;
            } }
          >
            Finish Recipe
          </StartRecipeButton>
        </BottomButtonsContainer> */}
      </FoodDetailsContainer>
    )
  );
}

export default FoodsInProgress;
