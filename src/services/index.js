export async function requestCategory() {
  // const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const categoryFetch = await fetch(URL);
  const categoryJson = await categoryFetch.json();
  return categoryJson;
}

export async function CategoryMealsApi(categoryName) {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;
  const categoryFetch = await fetch(URL);
  const categoryJson = await categoryFetch.json();
  return categoryJson;
}

export async function CategoryDrinksApi(categoryName) {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`;
  const categoryFetch = await fetch(URL);
  const categoryJson = await categoryFetch.json();
  return categoryJson;
}

export async function requestFoods() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const foodsFetch = await fetch(URL);
  const foodsJson = await foodsFetch.json();
  return foodsJson;
}

export async function requestNationality() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const nationalityFetch = await fetch(URL);
  const nationalityJson = await nationalityFetch.json();
  return nationalityJson;
}

export async function requestIngredients() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const ingredientsFetch = await fetch(URL);
  const ingredientsJson = await ingredientsFetch.json();
  return ingredientsJson;
}

export async function requestPhoto(ingredientName) {
  const URL = `https://www.themealdb.com/images/ingredients/${ingredientName}.png`;
  const ingredientsFetch = await fetch(URL);
  const ingredientsJson = await ingredientsFetch.json();
  return ingredientsJson;
}

// Ingredient => https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}
export async function foodIngredients(search) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`);
  const data = await response.json();
  return data;
}

// Name => https://www.themealdb.com/api/json/v1/1/search.php?s={nome}
export const foodNameFetch = async (search) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  // console.log('toSERVICE');
  const response = await fetch(URL);
  const data = await response.json();
  if (data.meals === null) {
    return global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }
  return data;
};

// First Letter => https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra}
export const foodFirstLetterFetch = async (search) => {
  if (search.length > 1) {
    global.alert('Your search must have only 1 (one) character');
    return [];
  }
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search[0]}`);
  const data = await response.json();
  return data.meals;
};

// Ingredient => https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}
export const drinkIngredientFetch = async (search) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`);
  const data = await response.json();
  return data;
};

// https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
export const drinkIngredientList = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
  const data = await response.json();
  return data;
};

// www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
export const drinkIngredientsByName = async (search) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${search}`);
  const data = await response.json();
  return data;
};

// Name => https://www.themealdb.com/api/json/v1/1/search.php?s={nome}
export const drinkNameFetch = async (search) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
  const data = await response.json();
  if (data.drinks === null) {
    return global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }
  return data;
};

// First Letter => https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra}
export const drinkFirstLetterFetch = async (search) => {
  if (search.length > 1) {
    global.alert('Your search must have only 1 (one) character');
    return [];
  }
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`);
  const data = await response.json();
  return data.drinks;
};

export const requestCategoriesDrinks = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(URL);
  const data = await response.json();
  return data.drinks;
};

export const getFoodById = async (id) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const getDrinkById = async (id) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const randomMeal = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const response0 = await fetch(URL);
  const data0 = await response0.json();
  return data0;
};

export const randomDrink = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const response0 = await fetch(URL);
  const data0 = await response0.json();
  return data0;
};
