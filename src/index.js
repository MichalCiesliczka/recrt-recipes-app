import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import rootReducer from './rootReducer';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

import App from './core/app';
import Routes from './routes';

import './index.css';

const { store } = configureStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Routes />
    </App>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
