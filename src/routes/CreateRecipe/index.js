import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "transactionList" */ './CreateRecipe'),
  loading: () => null,
});

export default LoadableComponent;
