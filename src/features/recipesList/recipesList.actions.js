import { createAction } from 'redux-actions';

export const LOCAL_STORAGE_KEY = 'recipesList';

export const RECIPES_LIST_UPDATE_LIST = 'RECIPES_LIST/UPDATE_LIST';

export const updateRecipesList = createAction(RECIPES_LIST_UPDATE_LIST, recipes => recipes);

export const localRecipesMiddleware = () => next => (action) => {
  if (action.type === RECIPES_LIST_UPDATE_LIST) {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(action.payload));
    } catch (error) {
      // TODO: Handle this error more gentle.
      console.error(error);
    }
  }

  return next(action);
};

export default {
  localRecipesMiddleware,
};
