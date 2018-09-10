import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "createRecipe" */ './CreateRecipe'),
  loading: () => null,
});

export default LoadableComponent;
