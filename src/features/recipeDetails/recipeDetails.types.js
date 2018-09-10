// @flow
export type Ingredient = {
  amount: number | string,
  name: string,
};

export type Step = {
  name: string,
};

export type Recipe = {
  id: string,
  title: string,
  description: string,
  ingredients: Ingredient[],
  steps: Step[],
};
