import { connect } from 'react-redux';

import {
  getRecipesList,
} from '../recipesList.selectors';

import RecipesListComponent from '../components/RecipesList';

const mapStateToProps = state => ({
  recipes: getRecipesList(state),
});

export default connect(mapStateToProps)(RecipesListComponent);
