import recipesList, { initialState } from '../recipesList.reducer';
import { updateRecipesList } from '../recipesList.actions';

describe('recipesList reducer', () => {
  it('should return initial state', () => {
    const state = recipesList(undefined, { type: 'TEST' });

    expect(state).toEqual(initialState);
  });

  it('should save recipes list when new data comes in', () => {
    const payload = {
      recipesList: [{
        id: 1,
        title: 'Test',
      }],
    };

    const changedState = recipesList(
      initialState,
      { type: updateRecipesList, payload },
    );
    expect(changedState.recipesList).toEqual(payload);
  });
});
