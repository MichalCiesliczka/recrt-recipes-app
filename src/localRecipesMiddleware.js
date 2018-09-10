import { RECIPES_LIST_UPDATE_LIST } from './features/recipesList/recipesList.actions';
import { CREATE_RECIPE_CREATE } from './features/createRecipe/createRecipe.actions';
import { EDIT_RECIPE_EDIT } from './features/editRecipe/editRecipe.actions';
import { RECIPE_DETAILS_DELETE_RECIPE } from './features/recipeDetails/recipeDetails.actions';

export const LOCAL_STORAGE_KEY = 'recipesList';

const saveRecipesToLS = (list) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  } catch (error) {
    // TODO: Handle this error more gentle.
    console.error(`Your browser cannot handle local storage, exited with error: ${error}`);
  }
};

const localRecipesMiddleware = store => next => (action) => {
  if (action.type === CREATE_RECIPE_CREATE) {
    const { recipesList } = store.getState().recipes;

    recipesList.push(action.payload);
    saveRecipesToLS(recipesList);

    return next({
      type: RECIPES_LIST_UPDATE_LIST,
      payload: recipesList,
    });
  }

  if (action.type === EDIT_RECIPE_EDIT) {
    const { recipesList } = store.getState().recipes;

    const updatedRecipesList = recipesList.map((recipe) => {
      if (recipe.id === action.payload.id) {
        return action.payload;
      }

      return recipe;
    });
    saveRecipesToLS(updatedRecipesList);

    return next({
      type: RECIPES_LIST_UPDATE_LIST,
      payload: updatedRecipesList,
    });
  }

  if (action.type === RECIPE_DETAILS_DELETE_RECIPE) {
    const { recipesList } = store.getState().recipes;

    const updatedRecipesList = recipesList.filter(recipe => recipe.id !== action.payload);
    saveRecipesToLS(updatedRecipesList);

    return next({
      type: RECIPES_LIST_UPDATE_LIST,
      payload: updatedRecipesList,
    });
  }

  return next(action);
};

export default localRecipesMiddleware;
