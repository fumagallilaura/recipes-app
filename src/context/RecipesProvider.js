import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { foodIngredients, foodNameFetch, foodFirstLetterFetch, drinkNameFetch,
  drinkIngredientFetch, drinkFirstLetterFetch, CategoryMealsApi, CategoryDrinksApi,
} from '../services';
// https://stackoverflow.com/questions/48363998/two-providers-in-a-react-component

function RecipesProvider({ children }) {
  const [title, setTitle] = useState('');
  const [btnSearchIcon, setBtnSearchIcon] = useState(false);
  const [radio, setRadio] = useState('');
  const [submit, setSubmit] = useState(false);
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState();
  const [drinks, setDrinks] = useState();
  const [categoryOn, setCategoryOn] = useState(false);
  const [backupCat, setBackupCat] = useState('');

  const [searchBar, setSearchBar] = useState(false);

  const setMealsApi = async () => {
    // console.log(radio);
    if (radio === 'Ingredients') {
      const response = await foodIngredients(search);
      setFoods(response.meals);
    } else if (radio === 'FirstLetter') {
      const response = await foodFirstLetterFetch(search);
      setFoods(response);
    } else if (radio === 'Name') {
      // console.log('toCerto');
      const response = await foodNameFetch(search);
      setFoods(response.meals);
    } else if (!radio) {
      // console.log('toAQUI');
      const response = await foodNameFetch('');
      setFoods(response.meals);
    }
  };

  const setDrinksApi = async () => {
    if (radio === 'Ingredients') {
      const response = await drinkIngredientFetch(search);
      setDrinks(response.drinks);
    } else if (radio === 'FirstLetter') {
      const response = await drinkFirstLetterFetch(search);
      setDrinks(response.drinks);
    } else if (radio === 'Name') {
      const response = await drinkNameFetch(search);
      setDrinks(response.drinks);
    } else if (!radio) {
      const response = await drinkNameFetch('');
      setDrinks(response.drinks);
    }
  };

  const submitApi = async () => {
    if (title === 'Drinks') {
      await setDrinksApi();
    } else if (title === 'Foods') {
      await setMealsApi();
    }
    setCategoryOn(false);
  };

  const FoodAPI = async () => {
    const response = await foodNameFetch('');
    setFoods(response.meals);
  };

  const DrinkAPI = async () => {
    const response = await drinkNameFetch('');
    setDrinks(response.drinks);
  };

  useEffect(() => {
    FoodAPI();
    DrinkAPI();
  }, []);

  const setCategoryMealsApi = async (strCategory) => {
    const response = await CategoryMealsApi(strCategory);
    setFoods(response.meals);
  };

  const setCategoryDrinksApi = async (strCategory) => {
    const response = await CategoryDrinksApi(strCategory);
    setDrinks(response.drinks);
  };

  const categoryHandle = async (strCategory) => {
    if ((categoryOn && strCategory === backupCat) || (strCategory === 'All')) {
      setBackupCat('');
      await submitApi();
    } else if (title === 'Drinks') {
      setCategoryOn(true);
      setCategoryDrinksApi(strCategory);
      setBackupCat(strCategory);
    } else if (title === 'Foods') {
      setCategoryOn(true);
      setCategoryMealsApi(strCategory);
      setBackupCat(strCategory);
    }
  };

  const ingredientsDrinksAPI = async (strIngredient) => {
    const response = await drinkIngredientFetch(strIngredient);
    setDrinks(response.drinks);
  };

  const ingredientsFoodsAPI = async (strIngredient) => {
    const response = await foodIngredients(strIngredient);
    setFoods(response.meals);
  };

  const ingredientHandle = async (strIngredient, type) => {
    if (type === 'Drinks') {
      ingredientsDrinksAPI(strIngredient);
    } else if (type === 'Foods') {
      ingredientsFoodsAPI(strIngredient);
    }
  };

  const values = {
    setCategoryOn,
    categoryOn,
    submitApi,
    title,
    setTitle,
    btnSearchIcon,
    setBtnSearchIcon,
    setRadio,
    radio,
    setSubmit,
    submit,
    setSearch,
    search,
    foods,
    setFoods,
    drinks,
    setDrinks,
    categoryHandle,
    searchBar,
    setSearchBar,
    ingredientHandle,
  };

  return (
    <RecipesContext.Provider value={ values }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
