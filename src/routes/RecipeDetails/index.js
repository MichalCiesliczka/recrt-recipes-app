import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "recipeDetails" */ './RecipeDetails'),
  loading: () => null,
});

export default LoadableComponent;
