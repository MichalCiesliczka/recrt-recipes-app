import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "transactionList" */ './RecipesList'),
  loading: () => null,
});

export default LoadableComponent;
