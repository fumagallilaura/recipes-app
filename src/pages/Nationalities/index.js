import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../../components';
import RecipesContext from '../../context/RecipesContext';
import { NationalitiesContainer, NationalitiesTitle } from './style';
// import { requestNationality } from '../../services/index';
import { requestFoods } from '../../services/index';

function Nationalities() {
  const MAX_NUMBER = 12;
  const [nationalities, setNationalities] = useState([]);
  const [foodsByOrigin, setFoodsByOrigin] = useState([]);
  const [dropDown, setDropDown] = useState('All');
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);

  const getAllFoodsNationalities = async () => {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const { meals } = await request.json();
    setNationalities(meals);
  };

  const getFoodsByOrigin = async (value) => {
    // if (value === 'All') {
    //   getAllFoodsNationalities();
    // }
    if (value === 'All') {
      const allNationalities = await requestFoods();
      return setFoodsByOrigin(allNationalities.meals);
    }
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`);
    const { meals } = await request.json();
    return setFoodsByOrigin(meals);
  };

  useEffect(() => {
    getAllFoodsNationalities();
    getFoodsByOrigin('All');
  }, []);

  useEffect(() => {
    setTitle('Explore Nationalities');
    setBtnSearchIcon(true);
  }, [setTitle, setBtnSearchIcon]);

  const handleChange = ({ target }) => {
    const { value } = target;
    console.log(value);
    setDropDown(value);
    getFoodsByOrigin(value);
  };

  return (
    <NationalitiesContainer>
      <Header />
      <NationalitiesTitle>
        <label htmlFor="nationalities">
          Select Nationality:
          <select
            data-testid="explore-by-nationality-dropdown"
            onChange={ handleChange }
          >
            <option
              data-testid="All-option"
              value="All"
            >
              All
            </option>
            {
              nationalities.map((item, index) => (
                <option
                  key={ index }
                  data-testid={ [`${item.strArea}-option`] }
                  value={ item.strArea }
                >
                  {item.strArea}
                </option>
              ))
            }
          </select>
        </label>
        {
          dropDown && foodsByOrigin
            .map((item, index) => {
              console.log(item);
              if (index < MAX_NUMBER) {
                return (
                  <Link
                    to={ `/foods/${item.idMeal}` }
                    key={ index }
                    data-testid={ [`${index}-recipe-card`] }
                  >
                    <span
                      data-testid={ [`${index}-card-name`] }
                    >
                      { item.strMeal }
                    </span>
                    <img
                      data-testid={ [`${index}-card-img`] }
                      src={ item.strMealThumb }
                      alt={ item.strMealThumb }
                    />
                  </Link>
                );
              }
              return '';
            })
        }
      </NationalitiesTitle>
      <Footer />
    </NationalitiesContainer>
  );
}

export default Nationalities;
