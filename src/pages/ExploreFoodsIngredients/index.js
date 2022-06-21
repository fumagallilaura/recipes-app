import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../../components';
import RecipesContext from '../../context/RecipesContext';
import { ExploreFoodIngredientsContainer, ExploreFoodIngredientsTitle } from './style';
import { requestIngredients } from '../../services/index';

function ExploreFoodsIngredients() {
  const [foodIngredients, setFoodIngredients] = useState([]);
  const MAX_NUMBER = 12;
  const { setTitle, setBtnSearchIcon, ingredientHandle } = useContext(RecipesContext);

  useEffect(() => {
    setTitle('Explore Ingredients');
    setBtnSearchIcon(false);
    const handleApi = async () => {
      try {
        const api = await requestIngredients();
        setFoodIngredients(api.meals);
      } catch (error) {
        console.log(error);
      }
    };
    handleApi();
  }, [setTitle, setBtnSearchIcon]);

  return (
    <ExploreFoodIngredientsContainer>
      <Header />
      <ExploreFoodIngredientsTitle>
        {foodIngredients.map((item, index) => {
          if (index < MAX_NUMBER) {
            return (
              <Link
                key={ index }
                to="/foods"
                data-testid={ `${index}-ingredient-card` }
                onClick={ () => (ingredientHandle(item.strIngredient, 'Foods')) }
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png` }
                  alt={ item.strIngredient }
                />
                <span
                  data-testid={ `${index}-card-name` }
                >
                  { item.strIngredient }
                </span>
              </Link>
            );
          }
          return '';
        })}
      </ExploreFoodIngredientsTitle>
      <Footer />
    </ExploreFoodIngredientsContainer>
  );
}

export default ExploreFoodsIngredients;
