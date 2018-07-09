const React = require('react');
const App = require('../../shared/components/app');
const ReactDOMServer = require('react-dom/server');
const { Provider } = require('react-redux');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const reducers = require('../../shared/reducers');

function homeController(req, res) {
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  const css = '<link rel="stylesheet" href="../../build/bundle.css" />';
  const js = '<script src="../../build/bundle.js"></script>';

  const app = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>);
  res.send(`
      <html>
          ${css}
          <body>
              <main id="root">${app}</main>
          </body>
          ${js}
      </html>`);
}

module.exports = homeController;
