import { createSelector } from 'reselect';

import { getRecipesList } from '../recipesList/recipesList.selectors';

export const selectRecipeById = recipeId => createSelector(
  getRecipesList,
  allRecipes => allRecipes.find(recipe => recipe.id === recipeId),
);

export default {
  selectRecipeById,
};
