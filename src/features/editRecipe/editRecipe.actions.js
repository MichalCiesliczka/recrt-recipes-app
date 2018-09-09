import { createAction } from 'redux-actions';

export const EDIT_RECIPE_EDIT = 'EDIT_RECIPE/EDIT';

export const editRecipe = createAction(EDIT_RECIPE_EDIT);

export default {
  editRecipe,
};
