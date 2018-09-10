import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { recipesListReducer as recipes } from './features/recipesList';

const rootReducer = combineReducers({
  form: formReducer,
  recipes,
});

const reducer = rootReducer;

export default reducer;
