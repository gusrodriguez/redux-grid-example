/* eslint-disable */ 
const React = require('react');
const ReactDOM = require('react-dom');
const App = require('../shared/components/app');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const { Provider } = require('react-redux');
const reducers = require('../shared/reducers');

function startApp() {
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  // eslint-disable-next-line
  ReactDOM.hydrate(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'),
  );
}

module.exports = startApp;
