import { combineReducers } from 'redux';

import { recipesListReducer as recipes } from './features/recipesList';

const rootReducer = combineReducers({
  recipes,
});

const reducer = rootReducer;

export default reducer;
