// @flow
import type { Recipe } from '../recipeDetails/recipeDetails.types';

export type Recipes = Recipe[];

export type RecipesListColumn = {
  label: string,
  value: string,
  isBig: boolean,
};

export type RecipesListColumns = RecipesListColumn[];
