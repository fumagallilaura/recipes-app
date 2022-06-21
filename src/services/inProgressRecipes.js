const readInProgressRecipesArrs = () => (
  JSON.parse(localStorage.getItem('inProgressRecipes')) || {
    cocktails: {
    },
    meals: {
    },
  }
);

export const IngredientList = (type, id) => {
  let result = [];
  const InProgressRecipes = readInProgressRecipesArrs();
  Object.entries(InProgressRecipes).forEach(([key, value]) => {
    Object.entries(value).forEach(([k, v]) => {
      if (k === id && key === type) {
        result = v;
      }
    });
  });
  return result;
};

const saveInProgressRecipes = (recipes) => (
  localStorage.setItem('inProgressRecipes', JSON.stringify(recipes))
);

export const addRecipesToInProgress = (type, id, Arr) => {
  const InProgressRecipes = readInProgressRecipesArrs();
  InProgressRecipes[type][id] = Arr;
  saveInProgressRecipes(InProgressRecipes);
};

export const removeRecipesFromInProgresss = (type, id) => {
  const InProgressRecipes = readInProgressRecipesArrs();
  Object.entries(InProgressRecipes).forEach(([key, value]) => {
    Object.entries(value).forEach(([k]) => {
      if (k === id && key === type) {
        delete value[k];
      }
    });
  });
  saveInProgressRecipes(InProgressRecipes);
};

export const isRecipeInProgress = (type, id) => {
  const InProgressRecipes = readInProgressRecipesArrs();
  let pro = false;
  Object.entries(InProgressRecipes).forEach(([key, value]) => {
    Object.entries(value).forEach(([k]) => {
      if (k === id && key === type) {
        pro = true;
      }
    });
  });
  return pro;
};

export const addIngredient = (type, id, ingredient) => {
  let newIngredientList = [];
  const InProgressRecipes = readInProgressRecipesArrs();
  Object.entries(InProgressRecipes).forEach(([key, value]) => {
    Object.entries(value).forEach(([k, v]) => {
      if (k === id && key === type) {
        newIngredientList = [...v, ingredient];
      }
    });
  });
  addRecipesToInProgress(type, id, newIngredientList);
};

export const removeIngredient = (type, id, ingredient) => {
  let newIngredientList = [];
  const InProgressRecipes = readInProgressRecipesArrs();
  Object.entries(InProgressRecipes).forEach(([key, value]) => {
    Object.entries(value).forEach(([k, v]) => {
      if (k === id && key === type) {
        console.log('antes', v);
        const random = v.filter((e) => e !== ingredient);
        newIngredientList = random;
        delete value[k];
      }
    });
  });
  addRecipesToInProgress(type, id, newIngredientList);
};
