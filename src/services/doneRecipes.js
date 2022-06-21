export const readDoneRecipesArrs = () => (
  JSON.parse(localStorage.getItem('doneRecipes')) || []
);

const saveDoneRecipes = (recipes) => (
  localStorage.setItem('doneRecipes', JSON.stringify(recipes))
);

export const addRecipesToDones = (currentRecipeObj) => {
  const doneRecipes = readDoneRecipesArrs();
  const newDoneRecipes = [...doneRecipes, currentRecipeObj];

  saveDoneRecipes(newDoneRecipes);
};

export const removeRecipesFromDones = (currentRecipeObj) => {
  const doneRecipes = readDoneRecipesArrs();
  const newDoneRecipes = doneRecipes
    .filter((doneRecipeObj) => (
      (Number(doneRecipeObj.id) !== Number(currentRecipeObj.id))
      //  && (doneRecipeObj.type === currentRecipeObj.type)
    ));
  saveDoneRecipes(newDoneRecipes);
};

export const recipeIsDone = (recipes) => {
  const getRecipe = readDoneRecipesArrs()
    .filter((recipe) => (
      recipe.id === recipes.id && recipe.type === recipes.type));
  return getRecipe.length !== 0;
};

export const isRecipeDone = (recipes) => (
  readDoneRecipesArrs()
    .filter((recipe) => (
      recipe.id === recipes.id && recipe.type === recipes.type)));
