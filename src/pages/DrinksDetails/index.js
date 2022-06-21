import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecommendationFood from '../../components/RecomendationFood';
import RecipesContext from '../../context/RecipesContext';
import { getDrinkById } from '../../services';
import SharingButtons from '../../components/SharingButtons';
import RecipeButton from '../../components/RecipeButton';
import {
  DrinksDetailsContainer,
  DrinksDetailsImage,
  DrinksDetailsTitle,
  // DrinksDetailsButton,
  DrinksDetailsCategory,
  DrinksList,
  DrinksListItem,
  DrinksInstructions,
  // StartRecipeButton,
  BottomButtonsContainer,
  // TopButtonsContainer,
  CarouselContainer,
} from './style';
import {
  isRecipeDone,
} from '../../services/doneRecipes';

function DrinksDetails() {
  const { href } = window.location;
  const { id } = useParams();
  /* https://backefront.com.br/como-usar-useparams-react/ tem q fazer por aqui por causa dos testes */
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  const [drinkApi, setDrinkApi] = useState(false);
  // const [randomFoodApi, setRandomFoodApi] = useState();
  const [test, setTest] = useState();

  useEffect(() => {
    setTitle('Drinks Details');
    setBtnSearchIcon(false);

    const handleApi = async () => {
      const api = await getDrinkById(id);
      // console.log(api);
      // const foodRecommendation = await randomMeal();
      const testFood = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const testFoodJson = await testFood.json();
      setTest(testFoodJson.meals);
      // console.log(foodRecommendation);
      // setRandomFoodApi(foodRecommendation);
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

  // const getIngr = () => (handleIngredient().map((r) => r[1]));
  const arr = [];

  const MAX_RECOMENDATIONS = 6;
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
        linkCopied={ href }
      />
      <DrinksList>
        {
          handleIngredient().map((drink, index) => (
            <DrinksListItem
              key={ drink[0] }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {
                handlestrMeasure()[index].includes(null) ? (
                  `${drink[1]}`
                ) : (
                  `${drink[1]} - ${handlestrMeasure()[index][1]}`
                )
              }
            </DrinksListItem>
          ))
        }
      </DrinksList>
      <DrinksInstructions data-testid="instructions">
        { drinkApi[0].strInstructions }
      </DrinksInstructions>
      <BottomButtonsContainer>
        <CarouselContainer>
          {
            test
            && test.filter((_food, index) => index < MAX_RECOMENDATIONS)
              .map((foodRandom, index) => (
                <RecommendationFood
                  key={ index }
                  food={ foodRandom }
                  index={ index }
                />
              ))
          }
        </CarouselContainer>
        {
          isRecipeDone(drinkApi[0]).length === 0
            && <RecipeButton
              typeArr={ arr }
              type="cocktails"
              id={ id }
            />
        }
      </BottomButtonsContainer>
    </DrinksDetailsContainer>
  );
}

export default DrinksDetails;
