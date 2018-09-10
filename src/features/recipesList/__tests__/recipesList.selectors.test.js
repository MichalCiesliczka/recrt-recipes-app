import { getRecipesList } from '../recipesList.selectors';
import { initialState } from '../recipesList.reducer';

const state = {
  recipes: initialState,
};

describe('recipesList selectors', () => {
  it('should return recipes list', () => {
    expect(getRecipesList(state)).toEqual(initialState.recipesList);
  });
});
