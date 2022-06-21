import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, Footer } from '../../components';
import RecipesContext from '../../context/RecipesContext';
import { ExploreDrinksContainer, ExploreDrinksTitle } from './style';
import { randomDrink } from '../../services/index';

function ExploreDrinks({ history }) {
  const [randomDrinkID, setRandomDrinkID] = useState([]);
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);

  useEffect(() => {
    setTitle('Explore Drinks');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);

  const randomDrinkClick = () => {
    history.push(`/drinks/${randomDrinkID}`);
  };

  useEffect(() => {
    randomDrink().then(({ drinks }) => setRandomDrinkID(drinks[0].idDrink));
  }, []);

  return (
    <ExploreDrinksContainer>
      <Header />
      <Link to="/explore/drinks/ingredients">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient
        </button>
      </Link>
      <button
        type="button"
        onClick={ randomDrinkClick }
        data-testid="explore-surprise"
      >
        Surprise me!
      </button>
      <ExploreDrinksTitle>
        Explore Drinks Title
      </ExploreDrinksTitle>
      <Footer />
    </ExploreDrinksContainer>
  );
}

ExploreDrinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ExploreDrinks;
