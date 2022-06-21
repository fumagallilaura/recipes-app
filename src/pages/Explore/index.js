import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../../components';
import RecipesContext from '../../context/RecipesContext';
import { ExploreContainer, ExploreTitle } from './style';

function Explore() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);

  useEffect(() => {
    setTitle('Explore');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);

  return (
    <ExploreContainer>
      <Header />
      <Link to="/explore/foods">
        <button
          type="button"
          data-testid="explore-foods"
        >
          Explore Foods
        </button>
      </Link>
      <Link to="/explore/drinks">
        <button
          type="button"
          data-testid="explore-drinks"
        >
          Explore Drinks
        </button>
      </Link>
      <ExploreTitle>
        Explore
      </ExploreTitle>
      <Footer />
    </ExploreContainer>
  );
}

export default Explore;
