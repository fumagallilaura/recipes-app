import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipesContext from '../../context/RecipesContext';
import {
  ExploreDrinksIngredientsContainer,
  ExploreDrinksIngredientsTitle,
} from './style';
import { drinkIngredientList } from '../../services/index'; // para pegar a API

function ExploreDrinksIngredients() {
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const MAX_NUMBER = 12;
  const { setTitle, setBtnSearchIcon, ingredientHandle } = useContext(RecipesContext);

  useEffect(() => {
    setTitle('Explore Ingredients');
    setBtnSearchIcon(false);
    const handleApi = async () => {
      try {
        const api = await drinkIngredientList();
        setDrinkIngredients(api.drinks);
      } catch (error) {
        console.log(error);
      }
    };
    handleApi();
  }, [setTitle, setBtnSearchIcon]);

  return (
    <ExploreDrinksIngredientsContainer>
      <Header />
      <ExploreDrinksIngredientsTitle>
        {drinkIngredients.map((item, index) => {
          if (index < MAX_NUMBER) {
            return (
              <Link
                key={ index }
                to="/drinks"
                data-testid={ `${index}-ingredient-card` }
                onClick={ () => (ingredientHandle(item.strIngredient1, 'Drinks')) }
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ `https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}-Small.png` }
                  alt={ item.strIngredient1 }
                />
                <span
                  data-testid={ `${index}-card-name` }
                >
                  { item.strIngredient1 }
                </span>
              </Link>
            );
          }
          return '';
        })}
      </ExploreDrinksIngredientsTitle>
      <Footer />
    </ExploreDrinksIngredientsContainer>
  );
}

export default ExploreDrinksIngredients;
