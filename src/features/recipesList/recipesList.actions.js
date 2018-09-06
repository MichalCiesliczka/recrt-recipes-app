import { createAction } from 'redux-actions';

export const RECIPES_LIST_UPDATE_LIST = 'RECIPES_LIST/UPDATE_LIST';

export const updateRecipesList = createAction(RECIPES_LIST_UPDATE_LIST);

export default {
  updateRecipesList,
};
