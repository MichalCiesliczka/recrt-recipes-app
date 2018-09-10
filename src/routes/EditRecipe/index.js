import { withRouter } from 'react-router';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "editRecipe" */ './EditRecipe'),
  loading: () => null,
});

export default withRouter(LoadableComponent);
