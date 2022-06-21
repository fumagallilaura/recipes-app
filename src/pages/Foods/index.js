import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  MainContainer,
  CategoryContainerDefault,
  CategoryContainer,
  FoodsContainer,
} from './style';
import { Header, Footer, CategoriesButton, FoodCard } from '../../components';
import RecipesContext from '../../context/RecipesContext';
import { requestCategory } from '../../services';

function Foods() {
  const { foods, categoryOn,
    setTitle, setBtnSearchIcon, searchBar } = useContext(RecipesContext);
  const [categories, setCategories] = useState();
  const history = useHistory();

  const maxCategories = 5;
  const maxFoods = 12;

  const handleCategory = async () => {
    const response = await requestCategory();
    setCategories(response.meals);
  };

  useEffect(() => {
    handleCategory();
  }, []);

  useEffect(() => {
    setTitle('Foods');
    setBtnSearchIcon(true);
  }, [setTitle, setBtnSearchIcon]);

  const categoriesRender = () => (
    categories.map((category, index) => (
      index < maxCategories && (
        <CategoriesButton key={ index } category={ category } />
      )
    ))
  );

  return (
    <MainContainer>
      <Header />
      {
        searchBar
          ? (
            <CategoryContainer>
              { categories && categoriesRender() }
              {
                <CategoriesButton category={ { strCategory: 'All' } } />
              }
            </CategoryContainer>
          ) : (
            <CategoryContainerDefault>
              { categories && categoriesRender() }
              {
                <CategoriesButton category={ { strCategory: 'All' } } />
              }
            </CategoryContainerDefault>
          )
      }
      <FoodsContainer>
        {
          foods
          && foods.map((food, index) => (
            index < maxFoods && (
              <FoodCard
                key={ index }
                food={ food }
                testID={ index }
              />
            )
          ))
        }
        {
          (foods && foods.length === 1 && !categoryOn)
          && history.push(`/foods/${foods[0].idMeal}`)
        }
      </FoodsContainer>
      <Footer />
    </MainContainer>
  );
}

export default Foods;
