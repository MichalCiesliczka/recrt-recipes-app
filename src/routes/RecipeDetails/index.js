import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "transactionList" */ './RecipeDetails'),
  loading: () => null,
});

export default LoadableComponent;
