// @flow
export type Ingredient = {
  amount: number,
  name: string,
};

export type Step = string;

export type Recipe = {
  id: string,
  title: string,
  description: string,
  ingredients: Ingredient[],
  steps: Step[],
};

export type Recipes = Recipe[];

export type RecipesListColumn = {
  label: string,
  value: string,
  isBig: boolean,
};

export type RecipesListColumns = RecipesListColumn[];
