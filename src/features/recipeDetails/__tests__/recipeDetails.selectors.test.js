import { selectRecipeById } from '../recipeDetails.selectors';
import { initialState } from '../../recipesList/recipesList.reducer';

describe('recipeDetails selectors', () => {
  const recipeObj = {
    id: 123,
    title: 'Test title',
  };

  const updatedState = {
    recipes: {
      ...initialState,
      recipesList: [recipeObj],
    },
  };

  it('should return recipes list', () => {
    expect(selectRecipeById(123)(updatedState)).toEqual(recipeObj);
  });
});
