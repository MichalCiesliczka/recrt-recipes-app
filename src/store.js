import { createStore, compose, applyMiddleware } from 'redux';

import { localRecipesMiddleware } from './features/recipesList/recipesList.actions';

/* eslint-disable no-underscore-dangle */
/* redux devtools configuration */
const composeEnhancers = process.env.NODE_ENV === 'development'
  ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
  : compose;
/* eslint-enable */

const configureStore = (rootReducer) => {
  // TODO: Make a proper middleware for LS saving.
  const middleware = [localRecipesMiddleware];

  const store = {
    ...createStore(
      rootReducer,
      {},
      composeEnhancers(applyMiddleware(...middleware)),
    ),
  };

  if (process.env.NODE_ENV === 'development' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('./rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return { store };
};

export default configureStore;
