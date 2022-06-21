import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecommendationDrink from '../../components/RecommendationDrink';
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
  VideoFrame,
  BottomButtonsContainer,
  CarouselContainer,
} from './style';
import RecipeButton from '../../components/RecipeButton';
import {
  isRecipeDone,
} from '../../services/doneRecipes';

function FoodDetails() {
  const { href } = window.location;
  const { id } = useParams();
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  const [foodApi, setFoodApi] = useState(false);
  // const [drinksRandom, setDrinksRandom] = useState();
  const [test, setTest] = useState();

  useEffect(() => {
    setTitle('Foods Details');
    setBtnSearchIcon(false);
    const handleApi = async () => {
      try {
        const api = await getFoodById(id);
        setFoodApi(api.meals);
        const drinkTest = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        const drinkTestJson = await drinkTest.json();
        setTest(drinkTestJson.drinks);
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

  const getId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const number = 11;
    if (match && match[2].length === number) {
      const videoId = match[2];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return '';
  };

  // const getIngr = () => (handleIngredient().map((r) => r[1]));
  const arr = [];

  const MAX_RANDOM_DRINKS = 6;
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
          linkCopied={ href }
        />
        <FoodRecipeCategory data-testid="recipe-category">
          { foodApi.strCategory }
        </FoodRecipeCategory>
        <FoodDetailsList>
          {
            handleIngredient().map((meal, index) => (
              <FoodDetailsListItem
                key={ meal[1] }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { `${meal[1]} - ${handlestrMeasure()[index][1]}` }
              </FoodDetailsListItem>
            ))
          }
        </FoodDetailsList>
        <FoodDetailsInstructions data-testid="instructions">
          { foodApi[0].strInstructions }
        </FoodDetailsInstructions>
        {
          foodApi
          && (
            <VideoFrame
              data-testid="video"
              title="Recipe Video"
              width="747"
              height="420"
              src={ getId(foodApi[0].strYoutube) }
            />
          )
        }
        <BottomButtonsContainer>
          <CarouselContainer>
            {
              test
              && test.filter((_drink, index) => index < MAX_RANDOM_DRINKS)
                .map((drinkRandom, index) => (
                  <RecommendationDrink
                    key={ index }
                    // testID="0-recomendation-card"
                    drinkRandom={ drinkRandom }
                    index={ index }
                  />
                ))
            }
          </CarouselContainer>
          {
            isRecipeDone(foodApi[0]).length === 0
            && <RecipeButton
              typeArr={ arr }
              type="meals"
              id={ id }
            />
          }
        </BottomButtonsContainer>
      </FoodDetailsContainer>
    )
  );
}

export default FoodDetails;
