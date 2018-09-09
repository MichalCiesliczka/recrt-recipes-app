import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import { editRecipe } from '../editRecipe.actions';
import { selectRecipeById } from '../../recipeDetails/recipeDetails.selectors';

import EditRecipeComponent from '../components/EditRecipe';

const mapStateToProps = (state, { match: { params } }) => {
  const { id: recipeId } = params;
  return {
    recipe: selectRecipeById(recipeId)(state),
  };
};

const mapDispatchToProps = {
  editRecipe,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(EditRecipeComponent);
