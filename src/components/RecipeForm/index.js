import { compose } from 'redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

import RecipeFormComponent, { validate } from './RecipeForm';

export default compose(
  withRouter,
  reduxForm({
    form: 'recipe-form',
    validate,
  }),
)(RecipeFormComponent);