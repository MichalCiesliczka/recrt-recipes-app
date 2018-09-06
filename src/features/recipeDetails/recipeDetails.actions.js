import { createAction } from 'redux-actions';

export const RECIPE_DETAILS_UPDATE_ONE_RECORD = 'RECIPE_DETAILS/UPDATE_ONE_RECORD';
export const RECIPE_DETAILS_DELETE_ONE_RECORD = 'RECIPE_DETAILS/DELETE_ONE_RECORD';

export const updateRecipe = createAction(RECIPE_DETAILS_UPDATE_ONE_RECORD);
export const deleteRecipe = createAction(RECIPE_DETAILS_DELETE_ONE_RECORD);

export default {
  updateRecipe,
  deleteRecipe,
};
