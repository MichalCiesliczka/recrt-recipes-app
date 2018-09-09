import { createAction } from 'redux-actions';

export const RECIPE_DETAILS_DELETE_RECIPE = 'RECIPE_DETAILS/DELETE';

export const deleteRecipe = createAction(RECIPE_DETAILS_DELETE_RECIPE);

export default {
  deleteRecipe,
};
