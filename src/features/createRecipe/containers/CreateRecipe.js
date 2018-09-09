import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import { createRecipe } from '../createRecipe.actions';

import CreateRecipeComponent from '../components/CreateRecipe';

const mapDispatchToProps = {
  createRecipe,
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps),
)(CreateRecipeComponent);
