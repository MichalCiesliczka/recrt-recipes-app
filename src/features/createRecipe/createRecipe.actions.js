import { createAction } from 'redux-actions';

export const CREATE_RECIPE_CREATE = 'CREATE_RECIPE/CREATE';

export const createRecipe = createAction(CREATE_RECIPE_CREATE);

export default {
  createRecipe,
};
