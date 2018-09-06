import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import { selectRecipeById } from '../recipeDetails.selectors';
import { deleteRecipe } from '../recipeDetails.actions';

import RecipeDetailsComponent from '../components/RecipeDetails';

const mapStateToProps = (state, { match: { params } }) => {
  const { id: recipeId } = params;
  return {
    recipe: selectRecipeById(recipeId)(state),
  };
};

const mapDispatchToProps = {
  deleteRecipe,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(RecipeDetailsComponent);
