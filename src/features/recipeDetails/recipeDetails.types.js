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
