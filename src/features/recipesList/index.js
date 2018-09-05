import RecipesListComponent from './components/RecipesList';
import RecipesListContainer from './containers/RecipesList';

import recipesListReducer from './recipesList.reducer';
import recipesListSelectors from './recipesList.selectors';

export {
  RecipesListComponent,
  recipesListReducer,
  recipesListSelectors,
};

export default RecipesListContainer;
